import { Component, signal } from '@angular/core';
import { Balance } from './components/balance/balance';
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { transaction } from '../../shared/transaction/interfaces/transaction';
import { transactionType } from '../../shared/transaction/enums/transaction.enum';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  transactions = signal<transaction[]>([
    { title: 'Salário', value: 1000, type: transactionType.INCOME },
    { title: 'Aluguel', value: 500, type: transactionType.INCOME  },
    { title: 'Curso', value: 1000, type: transactionType.OUTCOME  },
    { title: 'faculdade', value: 500, type: transactionType.OUTCOME },
  ]);

}
