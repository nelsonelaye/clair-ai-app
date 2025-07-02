"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import SearchBar from "@/components/SerachBar";
import { motion } from "framer-motion";
import Link from "next/link";
import ReportModal from "@/components/ReportModal";
import { useEffect, useState } from "react";
import AppLayout from "@/layouts/AppLayout";
import { useMutation } from "@tanstack/react-query";
import { fetchStockInfos } from "@/api/stocks";

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);

  const {
    mutate: mutateTickers,
    isPending: isLoadingInfo,
    isSuccess: isInfoSuccess,
  } = useMutation({
    mutationFn: (tickers: Array<string>) => fetchStockInfos(tickers),
    onSuccess: (data) => {
      localStorage.setItem("stocks", JSON.stringify(data.data));
    },
  });

  useEffect(() => {
    if (isLoadingInfo || isInfoSuccess) {
      setIsOpen(true);
    }
  }, [isLoadingInfo, isInfoSuccess]);

  return (
    <>
      <ReportModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isLoading={isLoadingInfo}
      />
      <main className="relative min-h-screen bg-background text-[#040316] dark:text-white overflow-hidden">
        {/* Animated background pattern */}

        <div className="relative  ">
          <AppLayout>
            {/* Main content */}
            <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1.5 bg-[#88D7C1]/20 text-[#3ABEAD] rounded-full text-sm font-medium mb-4"
                >
                  Empowering Financial Intelligence
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[#040316] dark:text-white text-5xl md:text-6xl font-bold mb-6 leading-tight"
                >
                  Analyze multiple stocks with ease and{" "}
                  <span className="text-[#3ABEAD]">AI</span> intelligence
                </motion.h1>

                {/* <p className="text-xl sm:text-2xl font-light text-muted-foreground tracking-wide">
              Silent. Precise. Professional.
            </p> */}
                {/* <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8"></div> */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-[#5F5F5F] dark:text-[#9B9B9B] text-xl mb-8 max-w-xl mx-auto"
                >
                  Leverage AI for simplified equity analysis and smart insights
                </motion.p>

                <SearchBar onSend={mutateTickers} />
              </div>
            </section>
          </AppLayout>
        </div>
      </main>
    </>
  );
}
