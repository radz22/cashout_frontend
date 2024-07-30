import { useForm, SubmitHandler } from "react-hook-form";
import { signInFormType } from "../../types/signInFormType";
import Loading from "../looading/loading";

import signinLogin from "../../hooks/signinLogin";
import { useState } from "react";

const SignInForm = () => {
  const [password, setPassword] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<signInFormType>({
    shouldUseNativeValidation: true,
  });

  const { loading, handleLogin } = signinLogin(
    "https://cashout-backend-kjtw.onrender.com/userRoutes/signin"
  );

  const onSubmit: SubmitHandler<signInFormType> = async (
    data: signInFormType
  ) => {
    handleLogin(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <div className="mt-5">
        <div>
          <div>
            <p className="text-xl text-[#b3b3b3]">Username *</p>
          </div>
          <div>
            <input
              placeholder="Enter your Username"
              className="w-full mt-3 bg-[#e5e5e5] text-[#111111] px-4 py-4  border border-[#e5e5e5] outline-none rounded-full "
              {...register("username", {
                required: "Please enter your Username.",
              })} // custom message
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <div>
            <p className="text-xl text-[#b3b3b3]">Password *</p>
          </div>

          <div className="relative flex justify-center items-center w-full">
            <div className="w-full">
              <input
                placeholder="Enter your Password"
                type={password ? "text" : "password"}
                className="w-full mt-3 bg-[#e5e5e5] text-[#111111] px-4 py-4  border border-[#e5e5e5] outline-none rounded-full "
                {...register("password", {
                  required: "Please enter your Password.",
                })}
              />
            </div>

            <div className="absolute right-5">
              {" "}
              <div>
                {password ? (
                  <div onClick={() => setPassword(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      className="text-2xl mt-3 cursor-pointer"
                    >
                      <path
                        fill="currentColor"
                        d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"
                      />
                      <path
                        fill="currentColor"
                        d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                      />
                    </svg>
                  </div>
                ) : (
                  <div onClick={() => setPassword(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      className="text-2xl mt-3 cursor-pointer"
                    >
                      <path
                        fill="currentColor"
                        d="m5.24 22.51l1.43-1.42A14.06 14.06 0 0 1 3.07 16C5.1 10.93 10.7 7 16 7a12.4 12.4 0 0 1 4 .72l1.55-1.56A14.7 14.7 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68a16 16 0 0 0 4.18 6.17"
                      />
                      <path
                        fill="currentColor"
                        d="M12 15.73a4 4 0 0 1 3.7-3.7l1.81-1.82a6 6 0 0 0-7.33 7.33zm18.94-.07a16.4 16.4 0 0 0-5.74-7.44L30 3.41L28.59 2L2 28.59L3.41 30l5.1-5.1A15.3 15.3 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M20 16a4 4 0 0 1-6 3.44L19.44 14a4 4 0 0 1 .56 2m-4 9a13.05 13.05 0 0 1-6-1.58l2.54-2.54a6 6 0 0 0 8.35-8.35l2.87-2.87A14.54 14.54 0 0 1 28.93 16C26.9 21.07 21.3 25 16 25"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <button
          className="bg-[#3cb8d9] w-full py-5 px-5 text-2xl font-semibold text-white rounded-full hover:bg-[#5710b3]"
          type="submit"
        >
          {loading ? <Loading /> : "Login"}
        </button>
      </div>{" "}
    </form>
  );
};

export default SignInForm;
