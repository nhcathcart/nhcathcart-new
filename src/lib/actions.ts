'use server';
import { FormData } from '../components/contact/contact-form';
const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
export async function submitContactForm(data: FormData) {
 
    console.log('BASE_URL', BASE_URL);
    fetch(`https://${BASE_URL}/api/email`, {
        method: 'POST',
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone ?? '',
          message: data.message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => console.log("data is : ", data))
        .catch((err) => {});
    }
