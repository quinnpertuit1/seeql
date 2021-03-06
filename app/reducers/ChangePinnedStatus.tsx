import * as types from '../constants/actionTypes';

export default function changePinnedStatus(state, action) {
  const pinnedItems = state.slice();
  switch (action.type) {
    case types.REMOVE_FROM_PINNED:
      const newPinnedItems = state.filter(
        table => table !== action.payload.tablename
      );
      return newPinnedItems;
    case types.ADD_TO_PINNED:
      pinnedItems.push(action.payload.tablename);
      return pinnedItems;
    default:
      throw new Error();
  }
}
