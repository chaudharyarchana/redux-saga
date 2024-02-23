"use client";
import Loader from "../Loader";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { requestLogin } from "@/store/auth/auth";


const Login = () => {
  const store = useSelector((state) => state.login);

 const dispatch = useDispatch()

  const router = useRouter()
  const[user,setUser] =  useState({
    email:"",
    password:""
  })

  const onLogin = async () => {
      await dispatch(requestLogin(user))
       router.push("/products")
      // console.log(store.count)
       
  }

  return (
    <>
    <div className="w-1/2 h-96 border-2 border-cyan-500 mx-auto mt-20 flex  items-center justify-around">
      <div>
        <h1>Enter your email </h1>
        <input
          type="email"
          value={user.email}
          onChange={(e)=> setUser({...user , email : e.target.value})}
          placeholder="abc@gmail.com"
          className="border-2 px-3 py-1 w-96 mb-5"
        />
        <h1>Enter password</h1>
        <input
          type="password"
          placeholder="password"
          className="border-2 px-3 py-1 w-96 "
          value={user.password}
          onChange={(e) => setUser({...user, password : e.target.value})}
        />
        <p className="text-xs text-red-500">
          {" "}
          atleast 8 characters, uppercase , special character and numbers
        </p>
        <button className="px-2 py-1 bg-cyan-500 text-white mt-2 w-full"
        onClick={onLogin}
        >
          Submit
        </button>
      </div>
    </div>
    <Loader loading={store.isLoading}/>
    </>
  );
};
export default Login;
