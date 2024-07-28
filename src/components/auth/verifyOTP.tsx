import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { verifyOTPType } from "../../types/verifyOTPType";
import sessionOTP from "../sessionOTP/sessionOTP";
import sessionDataUser from "../sessionDataUser/sessionDataUser";
import signup from "../../hooks/signup";
import { ErrorAlert } from "../alert/alert";
import Loading from "../looading/loading";
import { Link } from "react-router-dom";
import signupOtpEmail from "../../hooks/signupOtpEmail";
const VerifyOTP = () => {
  const { register, handleSubmit } = useForm<verifyOTPType>({
    shouldUseNativeValidation: true,
  });
  const { dataUser } = sessionDataUser();
  const { handleErrorAlert } = ErrorAlert();
  const { otp } = sessionOTP();

  const { handleSignUp, buttonLoading } = signup(
    "http://localhost:4000/userRoutes/signup"
  );
  const { handleGetRandomOtp, loading } = signupOtpEmail(
    "http://localhost:4000/otpRoutes/otp"
  );
  const onSubmit: SubmitHandler<verifyOTPType> = async (data) => {
    if (data.otp == otp) {
      handleSignUp(dataUser);
    } else {
      handleErrorAlert("Invalid OTP");
    }
  };

  const handleOTP = () => {
    handleGetRandomOtp(dataUser);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
          <div>
            <div>
              <p className="text-xl text-[#b3b3b3]">OTP *</p>
            </div>
            <div>
              <input
                placeholder="Enter your OTP"
                className="w-full mt-3 bg-[#e5e5e5] text-[#111111] px-4 py-4  border border-[#e5e5e5] outline-none rounded-full text-xl "
                {...register("otp", {
                  required: "Please enter your OTP.",
                })} // custom message
              />
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <p
            className="text-[#3cb8d9] text-xl font-semibold"
            onClick={handleOTP}
          >
            {loading ? "Sending..." : "   Resend Code"}
          </p>

          <button
            className="bg-[#3cb8d9] w-full py-5 px-5 text-2xl font-semibold text-white rounded-full hover:bg-[#5710b3] mt-5"
            type="submit"
          >
            {buttonLoading ? <Loading /> : "Confirm"}
          </button>
        </div>
        <div className="flex items-center justify-center w-full">
          <p className=" mt-5 text-[#3cb8d9] text-xl font-semibold border-b-[2px] border-[#3cb8d9] w-fit">
            <Link to="/"> Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default VerifyOTP;
