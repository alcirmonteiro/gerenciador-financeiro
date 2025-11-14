import { Component, computed, input } from '@angular/core';
import { transaction } from '../../../../../../shared/transaction/interfaces/transaction';
import { transactionType } from '../../../../../../shared/transaction/enums/transaction.enum';

const CssClasses = {
  [transactionType.INCOME]: 'income',
  [transactionType.OUTCOME]: 'outcome',
};

@Component({
  selector: 'app-transaction-value',
  imports: [],
  templateUrl: './transaction-value.html',
  styleUrl: './transaction-value.scss',
  host: {
    '[class]': 'cssClass()'
  }
})
export class TransactionValue {

  transaction = input.required<transaction>();
  cssClass = computed(() => CssClasses[this.transaction().type]);

}
