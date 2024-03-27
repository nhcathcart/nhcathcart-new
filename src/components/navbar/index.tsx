import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-navbar";

export interface NavbarLink {
  linkText: string;
  href: string;
}

export default function Navbar() {
  const linkArray: NavbarLink[] = [
    { linkText: "home", href: "/" },
    { linkText: "projects", href: "/projects" },
    { linkText: "visualizations", href: "/visualizations" },
    { linkText: "movies", href: "/movies" },
    { linkText: "restaurants", href: "/restaurants" },
    { linkText: "playlists", href: "/playlists" },
    { linkText: "contact", href: "/contact" },
  ];

  return (
    <nav className=" fixed top-0 z-30 h-[80px] w-full flex items-center justify-between bg-background bg-opacity-90 px-4 md:px-8">
      <a href="/" className="">
        <h1 className="text-3xl font-[700]">nhcathcart</h1>
      </a>

      <div className="linkContainer flex gap-4">
        {linkArray.map((link: NavbarLink) => {
          return (
            <Link
              href={link.href}
              key={`navLink-${link.linkText}`}
              className="hidden rounded-md hover:bg-background-hover p-3 font-sans text-primary md:flex active:scale-95"
            >
              {link.linkText}
            </Link>
          );
        })}
        <MobileMenu linkArray={linkArray} />
      </div>
    </nav>
  );
}
