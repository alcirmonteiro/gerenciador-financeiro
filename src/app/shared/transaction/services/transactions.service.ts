import { inject, Injectable } from '@angular/core';
import { transaction } from '../interfaces/transaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient
      .get<transaction[]>('http://localhost:3000/transactions');
  }
  
}
