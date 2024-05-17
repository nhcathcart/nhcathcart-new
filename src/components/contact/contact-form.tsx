'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SuccessModal from './success-modal';
import { useEffect, useState } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_MAIL_URL;

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'A valid email is required' }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: 'A message is required' })
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setModalOpen(true);
      reset(); // Reset form fields after successful submission
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/email`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if (result.success) {
        reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <SuccessModal open={modalOpen} setOpen={setModalOpen} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex w-full flex-col gap-2 rounded border-text md:border md:px-6 md:py-8"
      >
        <div className="max-w-[400px]">
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-text">
            Name
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              id="text"
              className="block w-full rounded-md border-0 bg-text px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="John Smith"
              aria-describedby="name-description"
              {...register('name')}
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-accent" id="email-description">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="max-w-[400px]">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-text">
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="email"
              id="email"
              className="block w-full rounded-md border-0 bg-text px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
              aria-describedby="email-description"
              {...register('email')}
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-accent" id="email-description">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex w-full max-w-[400px] flex-col">
          <div className="flex w-full items-center justify-between">
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-text">
              Phone
            </label>
            <span className="block text-xs italic text-accent">* optional</span>
          </div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="phone"
              id="phone"
              className="block w-full rounded-md border-0 bg-text px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="999-999-9999"
              aria-describedby="phone-description"
              {...register('phone')}
            />
          </div>
          {errors.phone && (
            <p className="mt-2 text-sm text-accent" id="email-description">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="flex w-full flex-grow flex-col">
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-text">
            Message
          </label>

          <textarea
            placeholder="Your message here"
            {...register('message')}
            className=" text-gray-900 px-2 mt-2 min-h-[200px] rounded-md border-none bg-text py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-accent" id="email-description">
              {errors.message.message}
            </p>
          )}
        </div>
        <button className="mt-6 h-12 w-full rounded-xl bg-background-hover text-text transition-colors duration-200 hover:bg-accent hover:text-background md:w-[289px]">
          Send Message
        </button>
      </form>
    </>
  );
}
