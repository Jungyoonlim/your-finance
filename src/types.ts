export interface Account {
    id: string;
    name: string;
    balance: number;
  }
  
  export interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    category: string;
  }
  
  export interface Investment {
    id: string;
    name: string;
    value: number;
  }