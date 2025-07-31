"use client";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AnalysisTable } from "@/components/AnalysisTable";
import { getStockBySymbol, getStockRatios, stocks } from "@/lib/data";
import { Tabs } from "radix-ui";
import AppLayout from "@/layouts/AppLayout";
import { use, useEffect, useState } from "react";
import {
  StockInfoResponseInterface,
  InvestorTypeInterface,
} from "@/types/stocks";
import DownloadCSV from "@/components/DownloadCSV";
import { Select } from "@mantine/core";
import { IoBriefcase } from "react-icons/io5";
import { GrCircleAlert } from "react-icons/gr";
import Disclaimer from "@/components/Disclaimer";
import { MdArrowBack } from "react-icons/md";

export default function Analysis({
  searchParams,
}: {
  searchParams: Promise<{ symbols?: string }>;
}) {
  const [result, setResult] = useState<StockInfoResponseInterface>(
    {} as StockInfoResponseInterface
  );
  const params = use(searchParams);
  const [investorType, setInvestorType] = useState<InvestorTypeInterface>(
    InvestorTypeInterface.CONSERVATIVE
  );
  const [tab, setTab] = useState("overview");
  const symbolsParam = params.symbols || "";
  const symbols = symbolsParam.split(",").filter(Boolean);

  const tabList = [
    { label: "Overview", value: "overview" },
    { label: "Financial Ratios", value: "ratios" },
    { label: "News", value: "news" },
  ];

  // If no symbols provided, use the first 3 stocks as default
  const stockSymbols =
    symbols.length > 0 ? symbols : stocks.slice(0, 3).map((s) => s.symbol);

  // Get stock data for each symbol
  const stocksData = stockSymbols
    .map((symbol) => {
      const stock = getStockBySymbol(symbol);
      if (!stock) return null;

      const ratios = getStockRatios(symbol);
      return { ...stock, ratios };
    })
    .filter(Boolean);

  // If no valid stocks found, show not found
  if (stocksData.length === 0) {
    notFound();
  }

  useEffect(() => {
    const stocks = localStorage.getItem("stocks");
    if (stocks) {
      setResult(JSON.parse(stocks));
    }
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <AppLayout>
        <main className="min-h-[80vh]">
          <div className="w-full">
            <div className="py-8 mx-auto w-full md:pb-0 md:h-[20vh]  bg-black">
              <div className=" text-white container mx-auto px-4">
                <h1 className="text-3xl md:text-[40px] font-bold mb-2 flex items-center gap-3 ">
                  <Link href="/">
                    <MdArrowBack size={20} />
                  </Link>{" "}
                  <span>Analysis</span>
                </h1>

                <p className="text-sm  max-w-[500px] text-white font-medium hidden">
                  Quickly compare key financial ratios across stocks and access
                  tailored insights based on your investment appetite. Gain
                  better understanding of companies financial health to identify
                  trends and opportunities.
                </p>
              </div>
            </div>

            <div className="container mx-auto bg-white p-4 md:p-10 md:rounded-lg md:shadow-md md:mt-[-70px] min-h-[650px]">
              <Tabs.Root className="w-full" value={tab} onValueChange={setTab}>
                <div className="flex justify-between items-end gap-6 mb-10 flex-wrap">
                  <Tabs.List
                    className="flex w-fit shrink-0 border-b-[0.5px] border-mauve6  font-medium text-sm"
                    aria-label="Manage your account"
                  >
                    {tabList.map((e) => (
                      <Tabs.Trigger
                        key={e.value}
                        className="flex h-[45px] flex-1 cursor-pointer whitespace-nowrap select-none rounded-tr rounded-tl items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11  data-[state=active]:border-[#3ABEAD] data-[state=active]:text-[#3ABEAD] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative "
                        value={e.value}
                      >
                        {e.label}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>

                  {tab === "ratios" && (
                    <div className="md:ml-auto flex items-end gap-4">
                      <div className="border-gray-500 border px-4 h-[36px] font-semibold rounded-sm text-sm flex flex-row items-center">
                        <IoBriefcase fontSize={12} className="mr-2" />

                        <label>Risk: </label>
                        <select className="w-[100px] outline-0 text-sm truncate" onChange={(e) => setInvestorType(e.target.value as InvestorTypeInterface)}>
                          {[
                            { value: "conservative", label: "Conservative" },
                            { value: "balanced", label: "Balanced" },
                            { value: "aggressive", label: "Aggressive" },
                          ].map((e) => (
                            <option key={e.value} value={e.value}>
                              {e.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <DownloadCSV data={result} isLoading={false} />
                    </div>
                  )}
                </div>

                <Tabs.Content
                  className="grow rounded-b-md bg-white py-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                  value="overview"
                >
                  <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {result?.info?.map((stock) => (


                      <div
                        key={stock?.displayName}
                        className="w-full border border-gray-300 shadow-sm rounded-md p-3 py-5"
                      >

                        {
                          !stock?.displayName || !stock?.symbol ?<div className="w-full h-full flex items-center justify-center">


                            <p className="text-gray-500 font-medium">Data not available</p>
                          </div> :<>
                            <div className="flex items-center justify-between">
                          <Link
                            href={stock?.website || ""}
                            target="_blank"
                            className="hover:underline"
                          >
                            {stock?.longName}
                          </Link>
                          <span className="text-sm font-medium text-muted-foreground">
                            {stock?.symbol}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold">
                              ${stock?.currentPrice}
                            </span>
                            <span
                              className={`text-sm font-medium ${
                                stock?.regularMarketChange?.toString()[0] ===
                                "-"
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {/* {stock.regularMarketChange ?? 0 >= 0 ? "+" : ""} */}
                              {stock?.regularMarketChange?.toFixed(2)}%
                            </span>
                          </div>
                          <p className="text-sm mb-4">
                            {stock?.longBusinessSummary?.substring(0, 150)}...
                          </p>
                          <p className="text-sm">
                            <span className="font-semibold">Industry:</span>{" "}
                            {stock?.industry}
                          </p>
                        </div>
                          </>
                        }
                      
                      </div>
                    ))}
                  </div>
                </Tabs.Content>
                <Tabs.Content
                  className="grow rounded-b-md bg-white py-5 outline-none  focus:shadow-black"
                  value="ratios"
                >
                  <AnalysisTable data={result} investorType={investorType} />
                </Tabs.Content>
                <Tabs.Content
                  className="grow rounded-b-md bg-white py-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                  value="news"
                >
                  <div>
                    <div>
                      <div>Recent News</div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        No recent news available for the selected stocks. 🚧 🚧
                        🚧
                      </p>
                    </div>
                  </div>
                </Tabs.Content>
              </Tabs.Root>
            </div>

            <Disclaimer />
          </div>
        </main>
      </AppLayout>
    </div>
  );
}
