"use client";

import { useState } from "react";
import {
  FaInfoCircle,
  FaArrowUp,
  FaArrowDown,
  FaLightbulb,
} from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { Tooltip } from "radix-ui";
// import { Card } from "@/components/ui/card";
import { ratiosTypes } from "@/constants/stocks";
import { AnalysisTableProps } from "@/types/components";
import { StockInfoInterface } from "@/types/stocks";
import { streamModelInsight } from "@/api/stocks";
import ToolTip from "../Tooltip";
import { MdBolt } from "react-icons/md";

export function AnalysisTable({ data, investorType }: AnalysisTableProps) {
  const [isLoadingTip, setIsLoadingTip] = useState(true);
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");

  const handleTip = async (
    stockName: string,
    ratioLabel: string,
    ratioValue: number
  ) => {
    // console.log("clicked");
    setIsLoadingTip(true);
    setOutput("");
    setError("");
    const message = `${stockName} stock has a ${ratioLabel} ratio of ${ratioValue}. The investor is ${investorType}`;
    await streamModelInsight(message, (chunk) => {
      // console.log("chunk", chunk);
      setOutput((prev) => prev + chunk);
    }).catch((e) => {
      setError(e);
      console.log("Stream error", e);
    });
    setIsLoadingTip(false);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex items-center justify-end text-sm font-medium mb-5 text-[#767676]">
          {" "}
          <MdBolt color="#EFBF04" fontSize={20} />{" "}
          <span>
            Click on any value in the table below to get AI-generated insights.
          </span>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="text-center text-[#767676] font-bold text-xs">
              <TableHead className="w-[200px] sticky left-0 bg-white">
                Stock
              </TableHead>
              {ratiosTypes?.map((ratio, i) => {
                // Get the first ratio with this ID to get the name
                // const firstRatio = data[0]?.ratios.find(
                //   (r) => r.id === ratio
                // );
                // if (!firstRatio) return null;
                // if (i === 0 || i === 1) return null;

                return (
                  <TableHead key={ratio.key} className=" min-w-[120px]">
                    <div className="flex items-center justify-center gap-1">
                      {ratio?.label}
                      {/* <Tooltip.Provider>
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <span>
                                <FaInfoCircle className="h-3 w-3 text-muted-foreground" />
                              </span>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content className="max-w-xs bg-black text-white p-2 rounded-md">
                                <p className="text-sm">{ratio?.description}</p>
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider> */}
                    </div>
                    {/* <div className="text-xs text-muted-foreground mt-1">
                        Industry: {firstRatio.industry.toFixed(2)}
                      </div> */}
                  </TableHead>
                );
              })}
              {/* <TableHead className="text-center w-[100px]">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.info?.map((stock) => (
              <TableRow key={stock.symbol}>
                <TableCell className="font-medium sticky left-0 bg-white shadow-md">
                  <div>
                    <div className="font-semibold">{stock.displayName}</div>
                    <div className="text-xs text-muted-foreground">
                      {stock.symbol}
                    </div>
                  </div>
                </TableCell>
                {ratiosTypes?.map((ratio, i) => {
                  // const ratio = stock.ratios.find((r) => r.id === ratio);
                  // if (!ratio) return <TableCell key={ratio}>N/A</TableCell>;

                  // const isPositive = ratio.change >= 0;
                  // const isAboveIndustry = ratio.value > ratio.industry;
                  // const formattedValue = formatValue(ratio, ratio.value);
                  // if (i === 0 || i === 1) return null;
                  return (
                    <TableCell
                      key={ratio.key}
                      className="text-center hover:bg-gray-200/40 cursor-pointer"
                    >
                      <ToolTip
                        isLoading={isLoadingTip}
                        content={output}
                        error={error}
                      >
                        <div
                          className="flex flex-col items-center  "
                          onClick={() => {
                            handleTip(
                              stock.displayName,
                              ratio.label,
                              Number(
                                stock[ratio.key as keyof StockInfoInterface]
                              )
                            );
                          }}
                        >
                          <div className="flex items-center gap-1">
                            <span className="font-bold">
                              {/* {Number(stock[ratio.key])?.toFixed(2)} */}
                              {(
                                Number(
                                  stock[ratio.key as keyof StockInfoInterface]
                                ) || 0
                              ).toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                            {/* {isAboveIndustry ? (
                              <FaArrowUp className="h-3 w-3 text-green-500" />
                            ) : (
                              <FaArrowDown className="h-3 w-3 text-red-500" />
                            )} */}
                          </div>
                          {/* <span
                            className={`text-xs ${
                              isPositive ? "text-green-500" : "text-red-500"
                            }`}
                          >
                            {isPositive ? "+" : ""}
                            {ratio.change.toFixed(2)}%
                          </span> */}
                        </div>
                      </ToolTip>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
