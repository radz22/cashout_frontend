import { useForm, SubmitHandler } from "react-hook-form";
import { signInFormType } from "../../types/signInFormType";
import Loading from "../looading/loading";

import signinLogin from "../../hooks/signinLogin";

const SignInForm = () => {
  const { register, handleSubmit } = useForm<signInFormType>({
    shouldUseNativeValidation: true,
  });

  const { loading, handleLogin } = signinLogin(
    "http://localhost:4000/userRoutes/signin"
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
          <div>
            <input
              placeholder="Enter your Password"
              className="w-full mt-3 bg-[#e5e5e5] text-[#111111] px-4 py-4  border border-[#e5e5e5] outline-none rounded-full "
              {...register("password", {
                required: "Please enter your Password.",
              })}
            />
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
