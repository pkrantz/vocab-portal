import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Word } from './words.model';

export const WordsPageActions = createActionGroup({
  source: 'Words Page',
  events: {
    // defining an event without payload using the `emptyProps` function
    'Opened': emptyProps(),

    // defining an event with payload using the `props` function
    'Pagination Changed': props<{ page: number; offset: number }>(),

    // defining an event with payload using the props factory
    'Query Changed': (query: string) => ({ query }),
  },
});

export const WordsActions = createActionGroup({
  source: 'Words',
  events: {
    'Add Word': props<{ word: Word }>(),
    'Remove Word': props<{ wordId: string }>(),
  },
});

export const WordsApiActions = createActionGroup({
  source: 'Words API',
  events: {
    'Retrieved Word List': props<{ words: ReadonlyArray<Word> }>(),
    productsLoadedSuccess: props<{ words: Word[] }>(),
    productsLoadedFailure: props<{ errorMsg: string }>(),
  },
});

// const authApiActions = createActionGroup({
//   source: 'Auth API',
//   events: {
//     'Login': props<{ payload: LoginPayload }>
//     'Login Success': props<{ userId: number; token: string; }>(),
//     'Login Failure': props<{ error: string; }>(),
//   },
// });
