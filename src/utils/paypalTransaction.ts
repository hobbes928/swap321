import { IOrder } from "../../lib/database/orders";

interface ApiResponse {
  verified: boolean;
  transaction_details: Array<{
    transaction_info: {
      transaction_initiation_date?: string;
      transaction_amount?: {
        value?: string;
        currency_code?: string; // Added for currency
      };
    };
    payer_info: {
      email_address?: string;
      payer_name?: {
        given_name?: string;
        surname?: string;
      };
    };
    shipping_info?: {
      name?: string;
    };
  }>;
}

interface ExtractedDetails {
  date: string;
  amount: string;
  currency: string; // Added for currency
  senderName: string;
  senderEmail: string;
  receiverName?: string;
  transactionType: "sent" | "received"; // Added for transaction type
}

export const paypalTransactionDetails = (
  data: ApiResponse
): ExtractedDetails | null => {
  if (!data.verified) {
    return null; // Return null if the transaction is not verified
  }

  // Check if transaction_details is an array with at least one element
  if (
    !Array.isArray(data.transaction_details) ||
    data.transaction_details.length === 0
  ) {
    return null; // Return null if there are no transaction details
  }

  const transaction = data.transaction_details[0];

  // Extract transaction info with default values
  const transaction_initiation_date =
    transaction.transaction_info?.transaction_initiation_date ?? "";
  const transaction_amount =
    transaction.transaction_info?.transaction_amount?.value ?? "";
  const currency =
    transaction.transaction_info?.transaction_amount?.currency_code ?? ""; // Extract currency

  // Determine transaction type based on the amount value
  const amount = parseFloat(transaction_amount);
  const transactionType = amount < 0 ? "sent" : "received";

  // Extract payer info with default values
  const given_name = transaction.payer_info?.payer_name?.given_name ?? "";
  const surname = transaction.payer_info?.payer_name?.surname ?? "";
  const email_address = transaction.payer_info?.email_address ?? "";

  // Construct sender name
  const senderName = `${given_name} ${surname}`.trim();

  // Extract receiver info with default values
  const receiverName = transaction.shipping_info?.name ?? undefined;

  return {
    date: transaction_initiation_date,
    amount: Math.abs(amount).toFixed(2),
    currency, // Include currency
    senderName,
    senderEmail: email_address,
    receiverName,
    transactionType, // Include transaction type
  };
};

export const isTransactionValid = (
  transaction: ExtractedDetails,
  criteria: IOrder | undefined,
  ethPrice: number // Add this to handle the conversion
): boolean => {
  if (!criteria) return false;
  // Convert amounts to numbers
  const transactionAmount = parseFloat(transaction.amount);
  const criteriaAmount = parseFloat(criteria.amount);

  // Allowable deviation in USD (e.g., $5 USD)
  const allowableDeviation = 5;

  // Determine conversion direction
  const isCryptoToFiat = criteria.currency === "ETH_TO_USD";

  // Calculate the converted amount based on the direction
  const convertedAmount = isCryptoToFiat
    ? transactionAmount * ethPrice
    : transactionAmount / ethPrice;

  // Check if the transaction amount is within the allowable deviation range
  const isAmountValid =
    Math.abs(convertedAmount - criteriaAmount) <= allowableDeviation;

  // Check if the email and address match
  const isEmailMatch =
    transaction.senderEmail === criteria.buyer_email &&
    transaction.receiverName === criteria.seller_email;

  // Additional checks for status and other fields (if applicable)
  const isStatusMatch = criteria.status === "in-progress";

  return isAmountValid && isEmailMatch && isStatusMatch;
};
