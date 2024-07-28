import { useForm, SubmitHandler } from "react-hook-form";
import Loading from "../looading/loading";
import { signUpFormType } from "../../types/signUpFormType";
import signupOtpEmail from "../../hooks/signupOtpEmail";
import axios from "axios";
import { ErrorAlert } from "../alert/alert";
const SignUpForm = () => {
  const { register, handleSubmit } = useForm<signUpFormType>({
    shouldUseNativeValidation: true,
  });
  const { loading, handleGetRandomOtp } = signupOtpEmail(
    "http://localhost:4000/otpRoutes/otp"
  );
  const { handleErrorAlert } = ErrorAlert();
  const onSubmit: SubmitHandler<signUpFormType> = async (data) => {
    try {
      axios
        .post("http://localhost:4000/userRoutes/checking", {
          email: data.email,
        })
        .then(() => {
          handleGetRandomOtp(data);
        })
        .catch((error) => {
          handleErrorAlert("Email use");
          throw new Error(
            `status:${error.response.status} & response: ${error.response.data.error} `
          );
        });
    } catch (error: any) {
      `status:${error.response.status} & response: ${error.response.data.error} `;
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5">
        <div>
          <div>
            <p className="text-xl text-[#b3b3b3]">Email *</p>
          </div>
          <div>
            <input
              placeholder="Enter your Email"
              className="w-full mt-3 bg-[#e5e5e5] text-[#111111] px-4 py-4  border border-[#e5e5e5] outline-none rounded-full "
              {...register("email", {
                required: "Please enter your Email.",
              })} // custom message
            />
          </div>
        </div>
      </div>
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
              })} // custom message
            />
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <button
          className="bg-[#3cb8d9] w-full py-5 px-5 text-2xl font-semibold text-white rounded-full hover:bg-[#5710b3]"
          type="submit"
        >
          {loading ? <Loading /> : " Create Account"}
        </button>
      </div>{" "}
    </form>
  );
};

export default SignUpForm;
