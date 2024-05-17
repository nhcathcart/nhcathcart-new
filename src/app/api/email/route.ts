import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request, res: Response) {
  try {
    const { name, email, message, phone } = await req.json();
    console.log('name', name);
    console.log('email', email);
    console.log('message', message);
    console.log('phone', phone);
    const client = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465, 
      secure: true, 
      auth: {
        user: 'nhcathcart@gmail.com',
        pass: process.env.MAIL_PASS,
      },
    });
    const mailData = {
      from: 'nhcathcart@gmail.com<nhcathcart@gmail.com>',
      to: 'nhcathcart@gmail.com',
      subject: 'Interest email',
      html: `
      <p>Hi, I'm ${name}</p>
      <p>My email is ${email}</p>
      <p>My phone number is ${phone}</p>
      <p>My message is ${message}</p>
      <p>The time is ${new Date().toLocaleString()}</p> `,
    }
    await new Promise((resolve, reject) => {
      // send mail
      client.sendMail(mailData, (err, info) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              console.log(info);
              resolve(info);
          }
      });
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

    return NextResponse.json({ name, email, message, phone });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: 'Internal server error, check server logs for more info',
    });
  }
}
