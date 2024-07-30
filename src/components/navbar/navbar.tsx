import Token from "../cookiesToken/token";
import { navbarType } from "../../types/navbarType";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import userFetchingData from "../../hooks/userFetchData";
import Loading from "../looading/loading";
import getCookiesValue from "../../utils/cookiesStorage";
const Navbar = () => {
  const { token } = Token();
  const location = useLocation();
  const username: string | undefined = Cookies.get("username");
  userFetchingData(token);

  const [navbar] = useState<navbarType[]>([
    {
      label: "Dashboard",
      path: "/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"
          />
        </svg>
      ),
    },
    {
      label: "Progress",
      path: "/progress",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z"
          />
        </svg>
      ),
    },
  ]);
  const isActive = (item: navbarType) => location.pathname === item.path;

  const handleLogout = () => {
    getCookiesValue.remove("login");
    getCookiesValue.remove("token");
    getCookiesValue.remove("userid");
    getCookiesValue.remove("username");
    window.location.reload();
    window.location.pathname = "/";
  };
  return (
    <div className="bg-[#5710b3] px-2 py-5 h-screen rounded-r-2xl	">
      <div>
        {username == undefined ? (
          <Loading />
        ) : (
          <div className="flex items-center gap-3 p-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-3xl text-white"
              >
                <path
                  fill="currentColor"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-lg font-semibold	">{username}</h1>
            </div>
          </div>
        )}
      </div>
      <div className="mt-16">
        {navbar.map((item, index) => (
          <div key={index}>
            <div
              className={`flex items-center gap-3 mt-9 hover:bg-[#a7a7a7] p-2 ${
                isActive(item) ? "bg-[#a7a7a7]" : ""
              }`}
            >
              <div className="text-white text-3xl ">{item.svg}</div>
              <div>
                <Link key={item.path} to={item.path}>
                  <h1 className="text-lg text-white font-normal">
                    {item.label}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div
          className="flex items-center gap-3 mt-9 hover:bg-[#a7a7a7] p-2"
          onClick={handleLogout}
        >
          <div className="text-white text-3xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
              className="cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8c-7 8.5-14.5 16.7-22.4 24.5a353.8 353.8 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.8 353.8 0 0 1-112.7-75.9a353.3 353.3 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8s94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9c7.9 7.9 15.3 16.1 22.4 24.5c3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82C271.7 82.6 79.6 277.1 82 516.4C84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7c3.4-5.3-.4-12.3-6.7-12.3m88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg text-white font-normal cursor-pointer">
              Log Out
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
