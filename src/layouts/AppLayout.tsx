"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import Button from "@/components/Button";
import { Footer } from "@/components/Footer";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        {/* <Link
            href="/"
            className="text-[#00ff66] text-4xl font-bold inline-block hover:scale-110 transition-transform duration-200"
          >
            4545
          </Link> */}
        <Header />
      </div>

      {children}
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Footer />
      </motion.footer>
    </>
  );
};

export default AppLayout;
