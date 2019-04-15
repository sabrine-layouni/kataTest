import {Currency} from './currency';

export class Currencies {
    page: number;
    limit: number;
    explicit: boolean;
    total: number;
    has_more: boolean;
    data?: (Currency)[] | null;
  };