import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth18813Saga from '../features/EmailAuth18813/redux/sagas';
import CalendarView28811Saga from '../features/CalendarView28811/redux/sagas';
import CalendarView28799Saga from '../features/CalendarView28799/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth18813Saga,
CalendarView28811Saga,
    
  ]);
}