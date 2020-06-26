import {put, call} from 'redux-saga/effects';
import ExampleActions from '../store/Example/Actions';
//import { userService } from 'App/Services/UserService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  console.log('called');

  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchUserLoading());
  yield put(ExampleActions.fetchUserSuccess('asda'));
  // Fetch user informations from an API
  // const user = yield call(userService.fetchUser);
  // if (user) {
  //   yield put(ExampleActions.fetchUserSuccess(user));
  // } else {
  //   yield put(
  //     ExampleActions.fetchUserFailure(
  //       'There was an error while fetching user informations.',
  //     ),
  //   );
  // }
}
