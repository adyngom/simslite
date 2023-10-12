import { Component, signal, effect, computed, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { faker } from '@faker-js/faker'
import { IonicModule } from '@ionic/angular'

const createTransactions = (numTransactions = 30) => {
  return Array.from({ length: numTransactions }, () => ({
    transactionId: faker.finance.transactionType(),
    company: faker.company.name(),
    share: faker.finance.currencySymbol(),
    commision: faker.finance.amount(100, 1000, 2),
    price: faker.finance.amount(100, 1000, 2),
    quantity: faker.finance.amount(100, 1000, 2),
    netAmount: faker.finance.amount(100, 1000, 2),
  }));
}

const shares = ['AAPL', 'GOOG', 'MSFT', 'AMZN', 'FB', 'TSLA', 'NVDA', 'PYPL', 'ADBE', 'NFLX', 'INTC', 'CMCSA', 'PEP', 'CSCO', 'AVGO', 'TMUS', 'QCOM', 'TXN', 'CHTR', 'AMGN', 'SBUX', 'AMD', 'GILD', 'MDLZ', 'INTU', 'BKNG', 'FISV', 'ISRG', 'ADP', 'VRTX', 'MU', 'REGN', 'ATVI', 'ILMN', 'CSX', 'ADSK', 'ADI', 'BIIB', 'AMAT', 'MELI', 'LRCX', 'ADP', 'FIS', 'ADSK', 'CTSH', 'NXPI', 'ADB']


@Component({
  selector: 'simslite-transactions',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  ngOnInit(): void {
    this._loadTransactions();
  }
  protected readonly _transactions = signal(createTransactions(10));

  protected _loadTransactions(): void {
    this._transactions.set(createTransactions(15));
  }

  protected getAShare = () => {
    return shares[Math.floor(Math.random() * shares.length)]
  }
}
