import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request, res: Response) {
  try {
    const { name, email, message, phone } = await req.json();
    console.log('hit post route');
    console.log(name, email, message, phone);
    const client = await nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465, 
      secure: true, 
      auth: {
        user: 'nhcathcart@gmail.com',
        pass: process.env.MAIL_PASS,
      },
    });

    await client.sendMail({
      from: 'nhcathcart@gmail.com<nhcathcart@gmail.com>',
      to: 'nhcathcart@gmail.com',
      subject: 'Interest email',
      html: `
      <p>Hi, I'm ${name}</p>
      <p>My email is ${email}</p>
      <p>My phone number is ${phone}</p>
      <p>My message is ${message}</p>
      <p>The time is ${new Date().toLocaleString()}</p> `,
    });
    console.log('hit end of post route');
    return NextResponse.json({ name, email, message, phone });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: 'Internal server error, check server logs for more info',
    });
  }
}
