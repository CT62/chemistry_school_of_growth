import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';
import { loadStripe } from "@stripe/stripe-js";

const stripeSession = new Stripe("sk_test_51OOIuAF7RC2rD4L0ztLoVOWE38zlxWaG0TKnfyZ203tlJaziXXdL77wQtnNF3972PrEZwRsxZz4Ju57wYPGfQTLX007DWZ2eUY", {
  apiVersion: "2023-10-16",
});

export async function checkout({ lineItems, authSession, courseID }) {
  const prisma = new PrismaClient();
  let stripePromise = null;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  const userSessionEmail = authSession?.email;
  console.log(userSessionEmail)
  const userSessionName = authSession?.user?.name;

  const customerSession = await stripeSession.customers.create({
	  email: userSessionEmail,
	  name: userSessionName,
	  metadata:{'courseID':courseID,},
   }) 

  const checkoutSession = await stripeSession.checkout.sessions.create({
      line_items: lineItems,
      customer:customerSession.id, 
      mode: 'payment',
      success_url: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: window.location.origin,
  });

  await stripe.redirectToCheckout({ sessionId: checkoutSession.id });
}
