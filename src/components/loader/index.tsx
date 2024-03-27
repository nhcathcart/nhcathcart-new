"use client";
import { Logo } from "./logo";

export default function Loader() {
  return (
    <div className="absolute z-[1000] h-[calc(100%-80px)] lg:h-[calc(100vh-80px)] min-w-full animate-fadeout flex items-center justify-center pointer-events-none bg-background">
      <div className="h-[250px] w-[250px] md:w-[400px] md:h-[400px]">
        <Logo />
      </div>
    </div>
  );
}
