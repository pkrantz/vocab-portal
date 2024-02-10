import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Word } from './words.model';

// ----------------------------------------------------------------------------
// state

export interface WordsState extends EntityState<Word> {
  loading: [];

  selectedWordId: string | null;
}

// ----------------------------------------------------------------------------
// adapter

export const selectWordId = ({ id }: Word) => id;

export const sortByLangenscheidtId = (first: Word, second: Word): number =>
  second.langenscheidtId - first.langenscheidtId;

export const wordsAdapter: EntityAdapter<Word> = createEntityAdapter({
  selectId: selectWordId,
  sortComparer: sortByLangenscheidtId,
});

export const wordsInitialState: WordsState = wordsAdapter.getInitialState({
  loading: [],
  selectedWordId: null,
});
