import {takeLatest, all, put} from 'redux-saga/effects';
import {ExampleTypes} from '../store/Example/Actions';
// import { StartupTypes } from 'App/Stores/Startup/Actions'
import {fetchUser} from './ExampleSaga';
// import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    // /**
    //  * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
    //  */
    // // Run the startup saga when the application starts
    // takeLatest(StartupTypes.STARTUP, startup),
    // // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
  ]);
}
