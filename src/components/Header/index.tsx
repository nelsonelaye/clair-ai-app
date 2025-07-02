"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";
import { IoMenu } from "react-icons/io5";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { cn } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import WaitlistModal from "../WaitlistModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  const isAnalysisPage = useMemo(() => {
    return pathname.includes("analysis");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#resources" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 bg-white right-0 z-50 transition-all duration-300",
        {
          " dark:bg-gray-900 py-3 shadow border-gray-200 dark:border-gray-800":
            isScrolled,
          " dark:bg-gray-900 py-4": !isScrolled,
          "!bg-black !text-white !relative": isAnalysisPage,
        }
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="w-8 h-8 rounded-full bg-[#3ABEAD] flex items-center justify-center text-white font-bold text-sm">
            U
          </div>
          <span className="text-[#040316] dark:text-white font-medium">
            Untitled UI
          </span> */}

          <Image
            src="/images/logo/clair-ai.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden  items-center space-x-8 relative">
          {navLinks.map((link) =>
            link.name === "Products" ? (
              <div key={link.name} className="relative">
                <button
                  type="button"
                  className="flex items-center text-[#5F5F5F] dark:text-[#9B9B9B] hover:text-[#040316] dark:hover:text-white transition-colors duration-300 text-sm font-medium focus:outline-none"
                  onClick={() => setIsProductsOpen((open) => !open)}
                  onBlur={() => setTimeout(() => setIsProductsOpen(false), 150)}
                  aria-expanded={isProductsOpen}
                  aria-haspopup="true"
                >
                  {link.name}
                  <MdKeyboardArrowDown
                    className={`ml-1 transition-transform duration-200 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-lg z-50">
                    <Link
                      href="/search"
                      className="block px-4 py-2 text-sm text-[#5F5F5F] dark:text-[#9B9B9B] hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#040316] dark:hover:text-white transition-colors"
                    >
                      Search
                    </Link>
                    <Link
                      href="#lending"
                      className="block px-4 py-2 text-sm text-[#5F5F5F] dark:text-[#9B9B9B] hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#040316] dark:hover:text-white transition-colors"
                    >
                      Lending
                    </Link>
                    <Link
                      href="#financial-assistant"
                      className="block px-4 py-2 text-sm text-[#5F5F5F] dark:text-[#9B9B9B] hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#040316] dark:hover:text-white transition-colors"
                    >
                      Financial assistant
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#5F5F5F] dark:text-[#9B9B9B] hover:text-[#040316] dark:hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden  text-[#5F5F5F] dark:text-[#9B9B9B] hover:text-[#040316] dark:hover:text-white text-sm font-medium"
          >
            Log in
          </Link>

          {/* <Link
            href="/signup"
            className="block px-4 py-2 bg-[#3ABEAD] hover:bg-[#88D7C1] text-white font-semibold rounded-md transition-all duration-300 text-sm"
          >
            Join Waitlist
          </Link> */}

          <WaitlistModal />

          {/* <ThemeToggle /> */}

          {/* Mobile menu button */}
          {/* <button
            className="md:hidden text-[#5F5F5F] dark:text-[#9B9B9B] hover:text-[#040316] dark:hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <MdClose className="w-6 h-6" />
            ) : (
              <IoMenu className="w-6 h-6" />
            )}
          </button> */}
        </div>
      </div>

      {/* Mobile navigation */}
      {/* {isMenuOpen && (
      

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#5F5F5F] dark:text-[#9B9B9B] hover:text-[#040316] dark:hover:text-white transition-colors duration-300 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-[#5F5F5F] dark:text-[#9B9B9B] hover:text-[#040316] dark:hover:text-white transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="text-[#3ABEAD] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </nav>
          </div>
   
        </motion.div>
      )} */}
    </header>
  );
}
