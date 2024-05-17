import ContactForm from '@/src/components/contact/contact-form';
import Header from '@/src/components/layout/header';
import PageContainer from '@/src/components/layout/page-container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'contact',
  description: "Nicholas Cathcart's contact page."
};
export default function Page() {
  return (
    <PageContainer>
      <Header title={"Contact"} description={"Shoot me a message if you'd like to get in touch."}/>
      <ContactForm />
    </PageContainer>
  );
}
