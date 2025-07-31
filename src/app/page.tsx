"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaRegLightbulb, FaRegCreditCard } from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdOutlineAttachMoney,
  MdOutlineSchool,
} from "react-icons/md";
import AppLayout from "@/layouts/AppLayout";
import SearchBar from "@/components/SerachBar";
import { useMutation } from "@tanstack/react-query";
import { fetchStockInfos } from "@/api/stocks";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { mutate: mutateTickers, isPending: isLoadingInfo } = useMutation({
    mutationFn: (tickers: Array<string>) => fetchStockInfos(tickers),
    onSuccess: (data) => {
      localStorage.setItem("stocks", JSON.stringify(data?.data));
      router.push("/analysis");
    },
  });

  const features = [
    {
      title: "  AI Stock Analysis",
      description:
        " Compare multiple stocks with AI-generated insights tailored to your risk profile.",
      icon: <FaChartLine className="text-[#3ABEAD] text-xl" />,
    },
    {
      title: "Investment Planner",
      description:
        "Personalized investment plans based on your goals, life stage, and risk appetite.",
      icon: <MdOutlineAttachMoney className="text-[#3ABEAD] text-xl" />,
    },
    {
      title: "  Alternative Credit Scoring",
      description:
        " Get fair credit scores using non-traditional data like mobile money and utility payments.",
      icon: <FaRegCreditCard className="text-[#3ABEAD] text-xl" />,
    },
  ];
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AppLayout>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20 pt-40">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-4.5 py-2 bg-[#88D7C1]/10 text-[#3ABEAD] rounded-full w-fit mx-auto text-sm font-semibold mb-4 flex items-center justify-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#3ABEAD]" /> Empowering
              Financial Intelligence
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#040316] dark:text-white text-[40px]  md:text-6xl font-bold mb-3 md:mb-6 leading-tight"
            >
              Building Intelligence in
              <br />
              Personal Finance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#767676] dark:text-[#9B9B9B] md:text-lg mb-5 md:mb-10 max-w-2xl mx-auto "
            >
              {/* Simple, transparent banking. No hidden fees and zero overdrafts. */}
              {/* Simple automation with intelligent tools, all at your fingertips. */}
              {/* Leverage AI for simplified equity analysis and smart insights */}
              {/* Start by leveraging AI to analyzing stocks and
              make informed financial decicions */}
              Simple automation with intelligent tools, all at your fingertips.
              Start by leveraging our AI system for quick stock analysis and
              informed financial decisions
            </motion.p>

            <SearchBar onSend={mutateTickers} isLoading={isLoadingInfo} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className=" flex-wrap justify-center gap-4 hidden"
            >
              <Link
                href="#demo"
                className="px-8 py-3 bg-[#3ABEAD] hover:bg-[#88D7C1] text-white font-medium rounded-md transition-all duration-300 text-lg"
              >
                Demo
              </Link>
              <Link
                href="#signup"
                className="px-8 py-3 bg-white dark:bg-gray-800 border border-[#3ABEAD] text-[#3ABEAD] font-medium rounded-md hover:bg-[#3ABEAD]/10 transition-all duration-300 text-lg"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>

          {/* Card Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-16 relative w-full max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#3ABEAD]/20 rounded-full filter blur-3xl opacity-70 z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#3ABEAD]/20 rounded-full filter blur-3xl opacity-70 z-0"></div>
              <div className="relative z-10 flex justify-center">
                <div className="relative transform -rotate-6 transition-transform hover:rotate-0 duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3ABEAD] to-[#88D7C1] opacity-70 rounded-2xl blur-lg"></div>
                  <div className="relative bg-[#3ABEAD] p-1 rounded-2xl shadow-xl">
                    <div className="bg-[#3ABEAD] p-4 rounded-xl text-white">
                      <div className="flex justify-between items-center mb-8">
                        <span className="font-bold text-lg">Clair AI</span>
                        <div className="w-10 h-6 bg-white/20 rounded-md flex items-center justify-end p-1">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="text-xs opacity-80 mb-1">JOHN DOE</div>
                        <div className="flex gap-3">
                          <span className="text-lg">1234</span>
                          <span className="text-lg">5678</span>
                          <span className="text-lg">9012</span>
                          <span className="text-lg">3456</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-xs opacity-80 mb-1">
                            JAMES JAMES
                          </div>
                          <div>05/28</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/20"></div>
                          <div className="w-8 h-8 rounded-full bg-white/30"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative transform rotate-6 transition-transform hover:rotate-0 duration-500 ml-[-80px] mt-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#BE3A67] to-[#88D7C1] opacity-70 rounded-2xl blur-lg"></div>
                  <div className="relative bg-[#BE3A67] p-1 rounded-2xl shadow-xl">
                    <div className="bg-[#BE3A67] p-4 rounded-xl text-white">
                      <div className="flex justify-between items-center mb-8">
                        <span className="font-bold text-lg">VestFinance</span>
                        <div className="w-10 h-6 bg-white/20 rounded-md flex items-center justify-end p-1">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="text-xs opacity-80 mb-1">
                          {" "}
                          JAMES JAMES
                        </div>
                        <div className="flex gap-3">
                          <span className="text-lg">1234</span>
                          <span className="text-lg">5678</span>
                          <span className="text-lg">9012</span>
                          <span className="text-lg">3456</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-xs opacity-80 mb-1">
                            VALID THRU
                          </div>
                          <div>05/28</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/20"></div>
                          <div className="w-8 h-8 rounded-full bg-white/30"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800 hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-[#5F5F5F] dark:text-[#9B9B9B] text-sm">
                Trusted by 5,000+ companies
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              {/* <Image
                src="/images/logo/chatgpt.png"
                alt="partner"
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
              <Image
                src="/images/logo/yahoo.png"
                alt="partner"
                width={100}
                height={100}
                quality={100}
                unoptimized
              /> */}
              {/* <Image
                src="/images/logo/meta.png"
                alt="partner"
                width={100}
                height={100}
              />
              <Image
                src="/images/logo/meta.png"
                alt="partner"
                width={100}
                height={100}
              /> */}
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              {/* <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div> */}
              <Image
                src="/images/logo/meta.png"
                alt="partner"
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white hidden" id="features">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
              {/* Left: Heading and Features List */}
              <div className="md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#040316]">
                  Overflowing with useful features
                </h2>
                <p className="text-[#5F5F5F] mb-10 max-w-md">
                  Powerful, self-serve product and growth analytics to help you
                  convert, engage, and retain more users. Trusted by over 4,000
                  startups.
                </p>
                <div className="flex flex-col gap-6 w-full">
                  {features.map((e) => (
                    <div
                      key={e.title}
                      className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl shadow p-5"
                    >
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#3ABEAD]/20">
                        {e.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1 text-[#040316]">
                          {e.title}
                        </h3>
                        <p className="text-[#5F5F5F] text-sm">
                          {e.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: Product Screenshot/Card */}
              <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
                  {/* Placeholder for product image or illustration */}
                  <div className="w-48 h-72 bg-[#3ABEAD]/10 rounded-xl flex items-center justify-center mb-6">
                    <svg
                      width="80"
                      height="80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="80"
                        height="80"
                        rx="16"
                        fill="#3ABEAD"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M24 56L56 24M24 24l32 32"
                        stroke="#040316"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="text-xl font-semibold text-[#040316] mb-2 text-center">
                    Unleash the full power of data
                  </div>
                  <div className="text-[#5F5F5F] text-center mb-6">
                    Everything you need to convert, engage, and retain more
                    users.
                  </div>
                  <div className="flex justify-center gap-6 w-full">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-[#040316]">
                        400+
                      </span>
                      <span className="text-xs text-[#5F5F5F]">
                        Projects completed
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-[#040316]">
                        600%
                      </span>
                      <span className="text-xs text-[#5F5F5F]">
                        Return on investment
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-[#040316]">
                        10k
                      </span>
                      <span className="text-xs text-[#5F5F5F]">
                        Global downloads
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900 hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#3ABEAD]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdOutlineSchool className="text-[#3ABEAD] text-2xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#040316] dark:text-white">
                  Share team insights
                </h3>
                <p className="text-[#5F5F5F] dark:text-[#9B9B9B]">
                  Whether you have team of 2 or 200, our shared team inbox keeps
                  everyone on the same page.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#3ABEAD]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRegLightbulb className="text-[#3ABEAD] text-2xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#040316] dark:text-white">
                  Deliver instant answers
                </h3>
                <p className="text-[#5F5F5F] dark:text-[#9B9B9B]">
                  An all-in-one solution that helps you balance your own support
                  and keep your customers happy.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#3ABEAD]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdOutlineAnalytics className="text-[#3ABEAD] text-2xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#040316] dark:text-white">
                  Manage your team with reports
                </h3>
                <p className="text-[#5F5F5F] dark:text-[#9B9B9B]">
                  Measure what matters with Clair AI easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple
                  clicks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hidden">
          <div className="container mx-auto px-4">
            <div className="bg-[#3ABEAD] rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Start your 30-day free trial
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                Join over 4,000+ startups already growing with VestFinance AI.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#"
                  className="px-8 py-3 bg-white text-[#3ABEAD] font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 text-lg"
                >
                  Learn more
                </Link>
                <Link
                  href="#"
                  className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300 text-lg"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AppLayout>
    </main>
  );
}
