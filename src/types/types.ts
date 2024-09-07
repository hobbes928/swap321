export interface OrderDetails {
    type: 'ETH_TO_USD' | 'USD_TO_ETH';
    amount: string;
    price: string;
    receiveAmount: string;
    sellerInfo: {
      name: string;
      accountNumber: string;
    };
  }
  
  export interface TransactionQueryParams {
    start_date: string;
    end_date: string;
    transaction_id?: string;
    // Add other optional parameters as needed
  }
  
  export interface ChatMessage {
    sender: string;
    message: string;
  }