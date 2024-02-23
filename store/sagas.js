import { requestSuccess } from "./auth/auth";
import {put ,takeEvery} from "redux-saga/effects"

function* onLogIn(payload){
     yield new Promise((res) => setTimeout(res,3000));
     yield put(requestSuccess(payload));
}

function* RootSaga(){
  yield takeEvery('login/requestLogin',onLogIn);
}

export default RootSaga;