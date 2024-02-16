import { NextResponse } from 'next/server';
import prisma from '../../prisma/client';

export async function POST(req) {
    try {
        const userSession = await req.json();

        const user = await prisma.purchase.findFirst({
            where: {
                courseId: userSession.CourseID,
                userEmail: userSession.userEmail,
            }
        });
        console.log('User:', user);

        if (user && userSession.userEmail) {
            return NextResponse.json({ 'isPurchased': true });
        } else {
            return NextResponse.json({ 'isPurchased': false });
        }
    } catch (error) {
        console.log('Error:', error);
        return NextResponse.error('An error occurred while processing your request.');
    }
}
