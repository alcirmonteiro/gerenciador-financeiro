import { transactionType } from "../enums/transaction.enum";

export interface transaction {
  id: number;
  title: string;
  value: number;
  type: transactionType;
}