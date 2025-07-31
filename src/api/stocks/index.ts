import axiosBaseInstance from "@/lib/axiosBaseInstance";
import { handleStreamingContent } from "@/lib/helpers";

export const fetchTickers = async (query: string) => {
  try {
    const response = await axiosBaseInstance.get(
      `/stocks/search?query=${query}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchStockInfos = async (tickers: Array<string>) => {
  try {
    const params = new URLSearchParams();
    tickers.forEach((ticker) => {
      params.append("symbols", ticker);
    });

    const response = await axiosBaseInstance.get(`/stocks/info`, {
      params: {
        symbols: tickers,
      },
      paramsSerializer: {
        indexes: null, // This will create symbols=AAPL&symbols=GOOGL format
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchRatioInsight = async (message: string) => {
  try {
    const response = await axiosBaseInstance.get(`/ai/ratio/insights`, {
      params: {
        message,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const streamModelInsight = async (
  message: string,
  onData: (chunk: string) => void
) => {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/model/ratio/insight?message=${encodeURIComponent(message)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const reader = response?.body?.getReader();
    const decoder = new TextDecoder();
    let result = "";

    while (true) {
      const { value, done } = (await reader?.read()) || {};
      if (done) break;

      const chunk = decoder.decode(value);
      onData(chunk);
    }
  } catch (err) {
    throw err;
  }
};
