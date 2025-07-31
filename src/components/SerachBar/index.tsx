"use client";

import { useState, useEffect, useRef } from "react";
// import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Send,
  BarChart2,
  Globe,
  Video,
  PlaneTakeoff,
  AudioLines,
} from "lucide-react";
import useDebounce from "@/hooks/useDebounce";
import { IoClose } from "react-icons/io5";
import { PiWaveformBold } from "react-icons/pi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchStockInfos, fetchTickers } from "@/api/stocks";
import useQueryError from "@/hooks/useQueryError";
import { recommendedStocks } from "@/constants/stocks";
import { StockTickerInterface } from "@/types/stocks";
import { TbCircleDotted } from "react-icons/tb";
import { Skeleton } from "@mantine/core";

interface Action {
  id?: string;
  ticker: string;
  icon?: React.ReactNode;
  name?: string;
  short?: string;
  end?: string;
}

interface SearchBarProps {
  onSend: (tickers: Array<string>) => void;
  isLoading?: boolean;
}

function SearchBar({ onSend, isLoading: isLoadingResult }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>();
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const debouncedQuery = useDebounce(query, 750);
  const [selectedTickers, setSelectedTickers] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (value: string) => {
    const newSelected = selectedTickers.includes(value)
      ? selectedTickers
      : [...selectedTickers, value];

    setSelectedTickers(newSelected);
    setQuery("");
    // handleFocus();
    setIsFocused(true);
    // inputRef.current?.focus();
  };

  const removeTicker = (value: string) => {
    const newSelected = selectedTickers.includes(value)
      ? selectedTickers.filter((e) => e !== value)
      : selectedTickers;

    setSelectedTickers(newSelected);
  };

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["search-stocks-tickers", debouncedQuery],
    // queryFn: ,
    queryFn: () =>
      debouncedQuery !== "" ? fetchTickers(debouncedQuery) : null,
    enabled: !!debouncedQuery,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    console.log(data?.data);
    setResult(data?.data);
  }, [data, isSuccess, isLoading]);

  useQueryError({isError: isError, error})

  useEffect(() => {
    const stocks = localStorage.getItem("stocks");
    if (stocks) {
      setSelectedTickers(JSON.parse(stocks)?.symbol);
      // console.log(JSON.parse(stocks));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsTyping(true);
  };

  const handleSend = () => {
    if (isLoadingResult) return;
    onSend(selectedTickers);
  };

  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          duration: 0.4,
        },
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative flex flex-col justify-start items-center ">
        <div className="w-full max-w-lg sticky top-0 bg-background pt-4 pb-1">
          <div className="relative">
            <div className="w-full pl-3 pr-9 py-1.5 h-[40px] md:h-[50px] text-sm rounded-[100px] focus-visible:ring-offset-0 border border-[#3ABEAD] flex items-center gap-3">
              {selectedTickers.length > 0 && (
                <div className="w-auto flex items-center gap-2">
                  {selectedTickers?.map((label) => {
                    return (
                      <div
                        key={label}
                        className="inline-flex items-center p-1  md:p-2  rounded-full md:text-sm font-medium
                  whitespace-nowrap overflow-hidden text-[10px] bg-[#88D7C1]/20 text-[#3ABEAD]"
                      >
                        {label}

                        <IoClose
                          fontSize={14}
                          className="ml-2 cursor-pointer"
                          onClick={() => removeTicker(label)}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              <input
                ref={inputRef}
                type="text"
                placeholder="Search company"
                value={query}
                onChange={handleInputChange}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => setIsFocused(false)}
                className="w-full h-full text-sm outline-none"
                disabled={selectedTickers?.length == 5}
              />
            </div>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6">
              <AnimatePresence mode="popLayout">
                {selectedTickers.length > 0 ? (
                  <motion.div
                    key="send"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleSend}
                  >
                    {isLoadingResult ? (
                      <TbCircleDotted className="w-full h-full text-[#3ABEAD] animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 text-[#3ABEAD] cursor-pointer" />
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="search"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Search className="w-full h-full text-[#3ABEAD] dark:text-[#88D7C1]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {selectedTickers?.length == 5 && (
            <p className="text-[11px] text-[#5F5F5F] dark:text-[#9B9B9B] text-left p-2">
              You can only select a max of 5 equities
            </p>
          )}
        </div>

        <div className="w-full max-w-lg absolute top-[70px] z-50">
          <AnimatePresence>
            {isLoading || isFocused || result ? (
              <motion.div
                className="w-full min-h-[250px] rounded-md shadow-sm overflow-hidden  bg-white mt-1 max-h-[300px] overflow-y-auto"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.ul>
                  <div className=" mb-2 px-3 py-2  flex items-center justify-between text-xs text-[#5F5F5F] dark:text-[#9B9B9B]">
                    <span>
                      {result?.length > 0 || query.length > 0
                        ? "Result"
                        : "Recommended"}
                    </span>
                  </div>

                  {isLoading ? (
                    <div className="w-full px-3">
                      <Skeleton height={20} mb={10} radius="md" />
                      <Skeleton height={20} mb={10} radius="md" />
                      <Skeleton height={20} mb={10} radius="md" />
                      <Skeleton height={20} mb={10} radius="md" />
                      <Skeleton height={20} mb={10} radius="md" />
                    </div>
                  ) : (
                    (isSuccess || (result?.length > 0 && query.length == 0)
                      ? result
                      : recommendedStocks
                    )?.map((e: StockTickerInterface) => (
                      <motion.li
                        key={e?.ticker}
                        className="px-3 py-2 flex items-center justify-between hover:bg-gray-200  cursor-pointer rounded-md"
                        variants={item}
                        layout
                        onClick={() => handleSelect(e?.ticker)}
                      >
                        <div className="flex items-center gap-2 justify-between">
                          <div className="flex items-center gap-2">
                            {/* <span className="text-gray-500">{e.icon}</span> */}
                            <span className="text-sm font-medium text-[#040316] dark:text-white">
                              {e?.ticker}
                            </span>
                            <span className="text-xs text-[#5F5F5F] dark:text-[#9B9B9B]">
                              {e?.name}
                            </span>
                          </div>
                        </div>
                        {/* <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">
                          {action.short}
                        </span>
                        <span className="text-xs text-gray-400 text-right">
                          {action.end}
                        </span>
                      </div> */}
                      </motion.li>
                    ))
                  )}
                </motion.ul>
                <div className="mt-2 px-3 py-2 border-t border-gray-100 dark:border-gray-800">
                  {/* <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Press ⌘K to open commands</span>
                    <span>ESC to cancel</span>
                  </div> */}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
