// /* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify';
import type { InputProps, RegisterInput } from '../types/RegisterInput';
import { useNavigate } from 'react-router';



const AuthForm: React.FC<InputProps> = ({regUser, setRegUser}) => {
  const [isLogin, setIsLogin] = useState(true);
  

  const {register, reset, handleSubmit} = useForm<RegisterInput>();
  const navigate = useNavigate();

  const onsubmit: SubmitHandler<RegisterInput> = (data) => {
    if(!isLogin){
        if(data.password !== data.confirmPassword){
            return toast.error("Password do not matched");
        }

        const resEmail = regUser.find((e) => e.email === data.email);
        if(resEmail){
            return toast.error("Already Registered");
        }

        setRegUser((prev) => [...prev, data]);
        setIsLogin(true);
        toast.success("Registeration done");
    }else{
        const email = data.email;
      

        const res = regUser.find((e: { email: string; password: string }) => e.email === email && e.password === data.password);

        if(res){
            navigate("/users");
            toast.success("Login Successfull");

        }else{
            toast.error("Have you registered ?")
        }
    }

    reset();
  }

  useEffect(() => {
    console.log(regUser);
  }, [regUser]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        <form onSubmit={handleSubmit(onsubmit)}  className="space-y-4">
          {!isLogin && (
            <input
            {...register("fullname", {required: "Fullname is required"})}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          )}
          <input
            {...register("email", {required: "Email is required"})}
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            {...register("password", {required: "Password is required"})}
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {!isLogin && (
            <input
              {...register("confirmPassword", {required: "Confirm Password is required"})}
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          )}

          <button
            type="submit"
            
            className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded text-white font-semibold"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => {setIsLogin(!isLogin); reset()}}
            className="text-indigo-400 hover:underline ml-1"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;