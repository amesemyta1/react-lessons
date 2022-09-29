export const NEXT_PAGE = 'USERS/NEXT_PAGE';
export const PREV_PAGE = 'USERS/PREV_PAGE';

export const goNextPage = () => ({
  type: NEXT_PAGE,
});
export const goPrevPage = () => ({
  type: PREV_PAGE,
});
