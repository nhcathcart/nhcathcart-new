'use client';
import { Logo } from './logo';

export default function Loader() {
  return (
    <div className="pointer-events-none absolute z-[1000] flex h-full min-w-full animate-fadeout items-center justify-center bg-background lg:h-[calc(100vh-80px)]">
      <div className="h-[250px] w-[250px] md:h-[400px] md:w-[400px]">
        <Logo />
      </div>
    </div>
  );
}
