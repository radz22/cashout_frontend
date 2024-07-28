import DashBoardPage from "./dashBoardPage";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div>
        <DashBoardPage />
      </div>
    </div>
  );
};

export default HomePage;
