import toast from "react-hot-toast";

const SucessAlert = () => {
  const handleSucessAlert = (text: string) => {
    toast.success(text);
  };

  return { handleSucessAlert };
};

const ErrorAlert = () => {
  const handleErrorAlert = (text: string) => {
    toast.error(text);
  };

  return { handleErrorAlert };
};

export { SucessAlert, ErrorAlert };
