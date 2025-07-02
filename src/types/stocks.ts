export interface StockTickerInterface {
  locale?: string;
  market?: string;
  name: string;
  primary_exchange?: string;
  ticker: string;
}

export interface CompanyOfficerInterface {
  maxAge?: number;
  name?: string;
  age?: number;
  title?: string;
  yearBorn?: number;
  fiscalYear?: number;
  totalPay?: number;
  exercisedValue?: number;
  unexercisedValue?: number;
}

export interface StockInfoResponseInterface {
  info: Array<StockInfoInterface>;
  symbol: Array<string>;
}

export enum InvestorTypeInterface {
  CONSERVATIVE = "conservative",
  BALANCED = "balanced",
  AGGRESSIVE = "aggressive",
}

export interface RatioTypeInterface {
  label: string;
  key: string;
  description?: string;
  insight?: string;
}

export interface StockInfoInterface {
  address1?: string;
  city: string;
  state: string;
  zip?: string;
  country: string;
  phone?: string;
  website: string;
  industry?: string;
  industryKey?: string;
  industryDisp?: string;
  sector?: string;
  sectorKey?: string;
  sectorDisp?: string;
  longBusinessSummary: string;
  fullTimeEmployees?: number;
  companyOfficers?: CompanyOfficerInterface[];
  overallRisk?: number;
  irWebsite: string;
  executiveTeam?: any[];
  priceHint?: number;
  previousClose?: number;
  open?: number;
  dayLow?: number;
  dayHigh?: number;
  regularMarketPreviousClose?: number;
  regularMarketOpen?: number;
  regularMarketDayLow?: number;
  regularMarketDayHigh?: number;
  dividendRate: number;
  dividendYield: number;
  exDividendDate?: number;
  payoutRatio?: number;
  fiveYearAvgDividendYield?: number;
  beta?: number;
  trailingPE: number;
  forwardPE: number;
  volume: number;
  regularMarketVolume?: number;
  averageVolume?: number;
  averageVolume10days?: number;
  averageDailyVolume10Day?: number;
  bid?: number;
  ask?: number;
  bidSize?: number;
  askSize?: number;
  marketCap: number;
  fiftyTwoWeekLow?: number;
  fiftyTwoWeekHigh?: number;
  priceToSalesTrailing12Months?: number;
  fiftyDayAverage?: number;
  twoHundredDayAverage?: number;
  trailingAnnualDividendRate?: number;
  trailingAnnualDividendYield?: number;
  currency: string;
  tradeable?: boolean;
  enterpriseValue?: number;
  profitMargins?: number;
  floatShares?: number;
  sharesOutstanding?: number;
  sharesShort?: number;
  shortRatio?: number;
  shortPercentOfFloat?: number;
  impliedSharesOutstanding?: number;
  bookValue: number;
  priceToBook: number;
  mostRecentQuarter?: number;
  earningsQuarterlyGrowth?: number;
  netIncomeToCommon?: number;
  trailingEps: number;
  forwardEps: number;
  lastSplitFactor?: string;
  lastSplitDate?: number;
  enterpriseToRevenue?: number;
  enterpriseToEbitda?: number;
  lastDividendValue?: number;
  lastDividendDate?: number;
  quoteType?: string;
  currentPrice: number;
  targetHighPrice?: number;
  targetLowPrice?: number;
  targetMeanPrice?: number;
  targetMedianPrice?: number;
  recommendationMean?: number;
  recommendationKey?: string;
  numberOfAnalystOpinions?: number;
  totalCash?: number;
  totalCashPerShare?: number;
  ebitda?: number;
  totalDebt: number;
  quickRatio: number;
  currentRatio: number;
  totalRevenue?: number;
  debtToEquity: number;
  revenuePerShare?: number;
  returnOnAssets: number;
  returnOnEquity: number;
  grossProfits?: number;
  freeCashflow?: number;
  operatingCashflow?: number;
  earningsGrowth: number;
  revenueGrowth: number;
  grossMargins?: number;
  ebitdaMargins?: number;
  operatingMargins?: number;
  financialCurrency?: string;
  symbol?: string;
  language?: string;
  region?: string;
  typeDisp?: string;
  quoteSourceName?: string;
  dividendDate?: number;
  earningsTimestamp?: number;
  epsTrailingTwelveMonths: number;
  epsForward: number;
  epsCurrentYear?: number;
  priceEpsCurrentYear?: number;
  averageAnalystRating?: string;
  cryptoTradeable?: boolean;
  regularMarketChangePercent?: number | string;
  regularMarketPrice?: number;
  marketState?: string;
  shortName?: string;
  longName?: string;
  preMarketTime?: number;
  regularMarketTime?: number;
  exchange?: string;
  messageBoardId?: string;
  exchangeTimezoneName?: string;
  exchangeTimezoneShortName?: string;
  gmtOffSetMilliseconds?: number;
  market?: string;
  preMarketChange?: number;
  preMarketChangePercent?: number;
  preMarketPrice?: number;
  regularMarketChange?: number;
  regularMarketDayRange?: string;
  fullExchangeName?: string;
  averageDailyVolume3Month?: number;
  fiftyTwoWeekLowChange?: number;
  displayName: string;
  trailingPegRatio: number;
}
