import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import forgotOTP from "../hooks/forgotOTP";
import Loading from "../components/looading/loading";
import { useForm, SubmitHandler } from "react-hook-form";

type forgotPassword = {
  email: string;
};
const ForgotPasswordPage = () => {
  const { handleSendOTP, loading } = forgotOTP();
  const { register, handleSubmit } = useForm<forgotPassword>({
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<forgotPassword> = async (
    data: forgotPassword
  ) => {
    handleSendOTP(data.email);
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" w-full h-screen relative bg-[#5710b3]">
        <div className="w-full relative">
          <img
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/11bb31d631025068b1d0d5c5/ghghgh-min.jpg"
            className="w-full h-[50vh]  object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[85vh] w-[55%] px-20 bg-[#fefefe] rounded-lg	 shadow-lg ">
            <div className="absolute inset-x-0 top-[-40px] flex justify-center">
              <div className="bg-[#fff] p-5 rounded-full shadow-lg shadow-[#f4f4f4]">
                <img
                  src="https://www.rappler.com/tachyon/2021/11/gcash.jpeg"
                  className="w-[100px] h-[100px]  rounded-full"
                  alt="Logo"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-[100px]">
                <div>
                  <h1 className="text-4xl	text-center tracking-wide	font-bold text-[#3cb8d9]">
                    Recover Account
                  </h1>
                  <p className="mt-3 text-[#b3b3b3] text-center">
                    Please enter the your Email{" "}
                    <span className="text-[#3cb8d9]"></span>
                  </p>
                </div>

                <div className="mt-12">
                  <input
                    placeholder="Enter your Email"
                    type="email"
                    id="email"
                    pattern=".+@gmail\.com"
                    required
                    className="w-full mt-3 bg-[#e5e5e5] text-[#111111] px-4 py-4  border border-[#e5e5e5] outline-none rounded-full "
                    {...register("email", {
                      required: "Please enter your Email.",
                    })}
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="bg-[#3cb8d9] w-full py-5 px-5 text-2xl font-semibold text-white rounded-full hover:bg-[#5710b3] mt-5"
                  type="submit"
                >
                  {loading ? <Loading /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
