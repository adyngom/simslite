import { ChangeDetectionStrategy, Component, signal, computed, TrackByFunction, effect } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BrnTableModule, PaginatorState, useBrnColumnManager } from '@spartan-ng/ui-table-brain'
import { faker } from '@faker-js/faker'
import { HlmTableModule } from '@spartan-ng/ui-table-helm'
import { NgForOf, TitleCasePipe } from '@angular/common'
import { HlmButtonDirective, HlmButtonModule } from '@spartan-ng/ui-button-helm'
import { FormsModule } from '@angular/forms'
import { HlmInputDirective } from '@spartan-ng/ui-input-helm'
import { debounceTime } from 'rxjs'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { BrnMenuModule } from '@spartan-ng/ui-menu-brain'
import { HlmMenuModule } from '@spartan-ng/ui-menu-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm'
import { radixChevronDown, radixStopwatch, radixLapTimer } from '@ng-icons/radix-icons'
import { BrnToggleGroupModule } from '@simslite/ui-toggle-brain'
import { HlmToggleGroupModule } from '@spartan-ng/ui-toggle-helm'

const createUsers = (numUsers = 5) => {
  return Array.from({ length: numUsers }, () => ({
    name: faker.person.fullName(),
    age: faker.number.int({ min: 10, max: 100 }),
    height: faker.number.int({ min: 140, max: 210 }),
  }));
};

const createTransactions = (numTransactions = 5) => {
  return Array.from({ length: numTransactions }, () => ({
    reference: faker.finance.transactionType(),
    date: faker.date.past(),
    journal: faker.finance.accountName(),
    startingBalance: faker.finance.amount(100, 1000, 2),
    endingBalance: faker.finance.amount(100, 1000, 2),
    status: faker.finance.transactionType(),
  }));
}

@Component({
  selector: 'simslite-data-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgForOf,
    BrnTableModule,
    HlmTableModule,
    BrnMenuModule,
    HlmMenuModule,
    HlmInputDirective,
    HlmButtonDirective,
    HlmIconComponent,
    TitleCasePipe,
  ],
  providers: [
    provideIcons({ radixChevronDown, radixStopwatch, radixLapTimer }),
  ],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent {
  private readonly _startEndIndex = signal({ start: 0, end: 0 });
  protected readonly _availablePageSizes = [10, 20, 50, 100, 10000];
  protected readonly _pageSize = signal(this._availablePageSizes[0]);

  protected readonly _brnColumnManager = useBrnColumnManager({
    reference: true,
    date: true,
    journal: true,
    startingBalance: true,
    endingBalance: true,
    status: true,
  });

  protected readonly _rawFilterInput = signal('');
  protected readonly _nameFilter = signal('');
  private readonly _debouncedFilter = toSignal(toObservable(this._rawFilterInput).pipe(debounceTime(300)));

  private readonly _users = signal(createUsers(20));
  private readonly _transactions = signal(createTransactions(100));
  private readonly _filteredUsers = computed(() =>
    this._users().filter((user) => {
      const nameFilter = this._nameFilter();
      return !nameFilter || user.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
  );
  protected readonly _data = computed(() =>
    this._filteredUsers().slice(this._startEndIndex().start, this._startEndIndex().end + 1)
  );
  protected readonly _transactionsData = computed(() =>
    this._transactions().slice(this._startEndIndex().start, this._startEndIndex().end + 1)
  );
  protected readonly _trackBy: TrackByFunction<{ name: string }> = (index: number, user: { name: string }) => user.name;
  protected readonly _totalElements = computed(() => this._filteredUsers().length);
  protected readonly _onStateChange = (state: PaginatorState) => {
    this._startEndIndex.set({ start: state.startIndex, end: state.endIndex });
  };

  constructor() {
    effect(() => this._nameFilter.set(this._debouncedFilter() ?? ''), { allowSignalWrites: true });
  }

  protected _loadNewUsers() {
    this._nameFilter.set('');
    this._users.set(createUsers(Math.random() * 200));
  }

  protected _loadNewTransactions() {
    this._nameFilter.set('');
    this._transactions.set(createTransactions(Math.random() * 200));
  }
}
