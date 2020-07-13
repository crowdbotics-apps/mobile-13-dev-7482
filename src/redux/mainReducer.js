import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth18800Reducer from '../features/EmailAuth18800/redux/reducers';
import CalendarView28799Reducer from '../features/CalendarView28799/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth18800: EmailAuth18800Reducer,
CalendarView28799: CalendarView28799Reducer,

});