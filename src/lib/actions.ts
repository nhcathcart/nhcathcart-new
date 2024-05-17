'use server';
import { FormData } from '../components/contact/contact-form';
const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
export async function submitContactForm(data: FormData) {
  try {
    console.log('BASE_URL', BASE_URL);
    const response = await fetch(`https://${BASE_URL}/api/email`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log('result', result)
    return result;
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}
