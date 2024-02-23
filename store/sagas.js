import { requestSuccess,requestFailed } from "./auth/auth";
import {call, put ,takeEvery} from "redux-saga/effects"

const userData = ["archanakumari123.co@gmail.com"]

function* onLogIn(payload){
     yield new Promise((res) => setTimeout(res,3000));
     let email = payload.payload.email
     for(let i=0 ; i<userData.length ; i++){
      if(userData[i] === email ){
        yield put(requestSuccess(payload));
           
      }
     }

     yield put(requestFailed())
    
     
     
    //  console.log(payload)
}

function* RootSaga(){
  yield takeEvery('login/requestLogin',onLogIn);
}

export default RootSaga;