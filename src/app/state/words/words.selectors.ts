import { WordsState, wordsAdapter } from "./words.state";

export const getSelectedUserId = (state: WordsState) => state.selectedWordId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = wordsAdapter.getSelectors();

// select the array of user ids
export const selectWordIds = selectIds;

// select the dictionary of user entities
export const selectWordEntities = selectEntities;

// select the array of users
export const selectAllWords = selectAll;

// select the total user count
export const selectWordsTotal = selectTotal;
