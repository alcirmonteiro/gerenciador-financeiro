import { transactionType } from "../enums/transaction.enum";

export interface transaction {
  title: string;
  value: number;
  type: transactionType;
}