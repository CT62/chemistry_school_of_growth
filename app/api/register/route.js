import Stripe from 'stripe';
import prisma from '../../prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const stripeSession = new Stripe("sk_test_51OOIuAF7RC2rD4L0ztLoVOWE38zlxWaG0TKnfyZ203tlJaziXXdL77wQtnNF3972PrEZwRsxZz4Ju57wYPGfQTLX007DWZ2eUY", {
  apiVersion: "2023-10-16",
});

export async function POST(request){
    const body = await request.json();
    const { name,email, password } = body;
    console.log(name,email,password);

    if(!name || !body.email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
          email: email
        }
    });

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const customerSession = await stripeSession.customers.create({
	    email: email,
	    name:name,
    });
    const stripeId = customerSession.id;
    
    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
        }
    });
    
    console.log(user.id)
    
    return NextResponse.json(user)
}
