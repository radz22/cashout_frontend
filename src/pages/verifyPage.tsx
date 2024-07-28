import { Toaster } from "react-hot-toast";
import VerifyOTP from "../components/auth/verifyOTP";
import sessionDataUser from "../components/sessionDataUser/sessionDataUser";
const VerifyPage = () => {
  const { dataUser } = sessionDataUser();

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
                  Verify your email
                </h1>
                <p className="mt-3 text-[#b3b3b3]">
                  Please enter the 4 digit code sent your{" "}
                  <span className="text-[#3cb8d9]">{dataUser?.email}</span>
                </p>
              </div>

              <div>
                <VerifyOTP />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
