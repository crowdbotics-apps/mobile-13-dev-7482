import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth18813Reducer from '../features/EmailAuth18813/redux/reducers';
import CalendarView28811Reducer from '../features/CalendarView28811/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth18813: EmailAuth18813Reducer,
CalendarView28811: CalendarView28811Reducer,

});