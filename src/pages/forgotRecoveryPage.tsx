import { Toaster } from "react-hot-toast";
import VerifyRecoveryOTP from "../components/auth/verifyRecoveryOTP";
import sessionRecovery from "../components/sessionDataUser/sessionUserName";
const ForgotRecoveryPage = () => {
  const { userName, id, otp } = sessionRecovery();

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
          <div className="relative h-auto w-[55%] px-20 bg-[#fefefe] rounded-lg	 shadow-lg py-5">
            <div className="absolute inset-x-0 top-[-40px] flex justify-center">
              <div className="bg-[#fff] p-5 rounded-full shadow-lg shadow-[#f4f4f4]">
                {" "}
                {/* Added padding and rounded-full */}
                <img
                  src="https://www.rappler.com/tachyon/2021/11/gcash.jpeg"
                  className="w-[100px] h-[100px]  rounded-full"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="mt-[100px]">
              <div>
                <h1 className="text-4xl	text-center tracking-wide	font-bold text-[#3cb8d9]">
                  Recovery Otp
                </h1>
                <p className="mt-4 text-[#b3b3b3]">
                  Please enter the 4 digit code your username
                  <span className="text-[#3cb8d9] ml-2">{userName}</span>
                </p>
              </div>

              <div>
                <VerifyRecoveryOTP id={id} otp={otp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotRecoveryPage;
