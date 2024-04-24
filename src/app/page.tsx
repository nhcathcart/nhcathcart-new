import { Logo } from '../components/loader/logo';

import Link from 'next/link';

export default async function Page() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center px-6">
        <div className=" flex h-full w-full max-w-screen-lg translate-y-[-30px] flex-col items-center justify-center gap-24 md:flex-row">
          <div className="flex w-full animate-fadein flex-col gap-4 md:w-1/2">
            <p className="text-3xl font-[400]">Hi my name is</p>
            <h1 className="text-4xl font-[600]">Nicholas Cathcart.</h1>
            <p className="text-3xl font-[400]">I build stuff for the internet.</p>
            <div className="flex flex-col gap-2 text-lg">
              <p>
                Checkout the{' '}
                <Link href={'/blog'} className="text-accent">
                  blog
                </Link>{' '}
                for technical musings.{' '}
              </p>
              <p>
                There are thoughts on{' '}
                <Link href={'/movies'} className="text-accent">
                  movies
                </Link>{' '}
                ,{' '}
                <Link href={'/restaurants'} className="text-accent">
                  food
                </Link>{' '}
                , and{' '}
                <Link href={'/playlists'} className="text-accent">
                  music
                </Link>{' '}
                in the respective sections.{' '}
              </p>
              <p>
                For work stuff head over to{' '}
                <a
                  href="https://www.arcusdigital.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  arcusdigital.io.
                </a>
              </p>
              <p>
                Reach out{' '}
                <Link href={'/contact'} className="text-accent">
                  here
                </Link>{' '}
                for a chat.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute top-0 z-[1000] h-full w-full animate-fadeout bg-background p-12 md:relative md:w-1/2 md:animate-none">
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
}
