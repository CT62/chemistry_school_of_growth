import prisma from '../../prisma/client';
import { NextResponse } from 'next/server';
import { Stripe } from 'stripe';
import { headers } from 'next/headers';
import { authOptions } from '../auth/[...nextauth]/route';

const stripe = new Stripe("sk_test_51OOIuAF7RC2rD4L0ztLoVOWE38zlxWaG0TKnfyZ203tlJaziXXdL77wQtnNF3972PrEZwRsxZz4Ju57wYPGfQTLX007DWZ2eUY", {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  try {
    const event = await req.json();
    switch (event?.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;

        const customer = await stripe.customers.retrieve(paymentIntent.customer);

        const customerId = customer.id;
        const customerEmail = customer.email;
	const courseId = customer.metadata

        console.log('Customer ID:', customerId);
        console.log('Customer Email:', customerEmail);
	console.log('CourseID:', courseId.courseID);
	
	await prisma.purchase.create({
		data:{
			courseId: courseId.courseID,
			userEmail: customerEmail,
		}
	})
        break;

      case 'payment_method.attached':
        console.log('PaymentMethod was attached to a Customer!');
        break;

      default:
        break;
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ received: false, error: error.message });
  }

  return NextResponse.json({ received: true });
}
