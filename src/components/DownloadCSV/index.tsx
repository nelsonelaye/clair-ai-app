import { DownloadReportProps } from "@/types/components";
import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { GoDownload } from "react-icons/go";
import { MdSimCardDownload } from "react-icons/md";

const DownloadCSV = ({ isLoading }: DownloadReportProps) => {
  const [data, setData] = useState("");

  const headers = [
    { label: "Company name", key: "displayName" },
    { label: "Symbol", key: "symbol" },
    { label: "Market", key: "marketCap" },
    { label: "Price", key: "currentPrice" },
    { label: "P/E", key: "trailingPE" },
    { label: "P/B", key: "priceToBook" },
    { label: "EPS", key: "trailingEps" },
    { label: "ROE", key: "returnOnEquity" },
    { label: "PEG", key: "trailingPegRatio" },
    { label: "Dividend yield", key: "dividendYield" },
    { label: "Debt-to-Equity", key: "debtToEquity" },
    { label: "Quick Ratio", key: "quickRatio" },
    { label: "Current Ratio", key: "currentRatio" },
    { label: "Gross Margin", key: "grossMargins" },
    { label: "Profit Margin", key: "profitMargins" },
  ];

  // const testData = [
  //   { name: "John", age: 30, city: "New York" },
  //   { name: "Jane", age: 25, city: "Boston" },
  //   { name: "Bob", age: 35, city: "Chicago" },
  // ];

  useEffect(() => {
    const data = localStorage.getItem("stocks");

    if (data) {
      // console.log(JSON.parse(data).info);
      setData(JSON.parse(data).info);
    }
  }, [isLoading]);

  return (
    <CSVLink
      data={data}
      headers={headers}
      filename="Clair-AI-analysis.csv"
      style={{ textDecoration: "none" }}
    >
      <Button
        variant="outline"
        color="black"
        disabled={isLoading}
        leftSection={<MdSimCardDownload fontSize={14} />}
        className="text-sm !border-gray-400"
      >
        {" "}
        {!isLoading ? "Export" : "Preparing report..."}
      </Button>
    </CSVLink>
  );
};

export default DownloadCSV;
