import { ActionReducer, createReducer, on } from '@ngrx/store';
import { WordsActions } from './words.actions';
import { WordsState, wordsAdapter, wordsInitialState } from './words.state';

export const wordsReducers: ActionReducer<WordsState> = createReducer(
  wordsInitialState,
  //
  on(WordsActions.addWord, (state: WordsState, { word }) =>
    wordsAdapter.addOne(word, state)
  ),
  //
  on(WordsActions.removeWord, (state: WordsState, { wordId }) =>
    wordsAdapter.removeOne(wordId, state)
  )
);
