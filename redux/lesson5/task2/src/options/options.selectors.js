/* eslint-disable import/no-extraneous-dependencies */
import { createSelector } from 'reselect';

export const optionsListSelector = state => state.options.optionsList;
export const selectedIdsSelector = state => state.options.selected;

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => allOptionsList.filter(option => selectedIds.includes(option.id)),
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) =>
    allOptionsList.filter(option => !selectedIds.includes(option.id)),
);
