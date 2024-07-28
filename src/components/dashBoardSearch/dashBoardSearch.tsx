import { useState, useEffect } from "react";
import DashBoardData from "../../hooks/dashBoardData";
import { dashBoardDataType } from "../../types/dashBoardDataType";
const DashBoardSearch = () => {
  const { data } = DashBoardData();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedItems, setDisplayedItems] = useState<{
    last: dashBoardDataType | null;
    secondToLast: dashBoardDataType | null;
  }>({
    last: null,
    secondToLast: null,
  });

  const [userData, setUserData] = useState<dashBoardDataType[]>([]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  useEffect(() => {
    const updateDisplayedItems = () => {
      if (searchTerm.length == 0) {
        const last = data[data.length - 1];
        const secondToLast = data.length > 1 ? data[data.length - 2] : null;
        setDisplayedItems({
          last,
          secondToLast,
        });
      } else {
        setDisplayedItems({
          last: null,
          secondToLast: null,
        });
        const filters = data.filter((item) =>
          item.referrence.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setUserData(filters);
      }
    };

    updateDisplayedItems();
  }, [data, searchTerm]);

  return (
    <div className="w-full p-3 mt-6">
      <div>
        <h1 className="text-2xl font-semibold font-serif">RECENT</h1>
      </div>

      <div className="px-3 mt-8 relative flex justify-center items-center w-full">
        <div className="w-full">
          <input
            className="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-full p-2 text-base cursor-pointer transition outline-none font-normal hover:border-[black] hover:bg-[#fff] "
            type="text"
            placeholder="Search by referrence"
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>

        <div className="absolute right-5">
          {" "}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-xl"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-7">
        {displayedItems.last && displayedItems.secondToLast ? (
          <div className="w-full  flex items-center justify-center flex-col">
            <div className="w-full h-auto p-3 bg-[#f3f3f3] shadow-lg shadow-[#dedede] rounded-lg	">
              <div className=" w-full flex items-center justify-center">
                <div className="bg-[#5710b3] w-[fit] py-2 px-4 flex items-center rounded-full	">
                  <p className="text-white text-sm  text-center">New</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 w-full mt-3">
                <div>
                  <h1 className="font-bold">AMOUNT</h1>
                  <p className="text-center mt-2">
                    <span className="font-semibold">PHP </span>{" "}
                    {displayedItems.secondToLast.amount}
                  </p>
                </div>
                <div>
                  <h1 className="font-bold">REFERRENCE</h1>
                  <p>{displayedItems.secondToLast.referrence}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center flex-col">
                <h1 className="font-bold">DATE</h1>
                <p className="text-center mt-2">
                  {displayedItems.secondToLast.date}
                </p>
              </div>
            </div>

            <div className="w-full h-auto p-3 bg-[#f3f3f3] shadow-lg shadow-[#dedede] mt-5 rounded-lg	">
              <div className=" w-full flex items-center justify-center">
                <div className="bg-[#5710b3] w-[fit] py-2 px-4 flex items-center rounded-full	">
                  <p className="text-white text-sm  text-center">New</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 w-full mt-3">
                <div>
                  <h1 className="font-bold">AMOUNT</h1>
                  <p className="text-center mt-2">
                    <span className="font-semibold">PHP </span>{" "}
                    {displayedItems.last.amount}
                  </p>
                </div>
                <div>
                  <h1 className="font-bold">REFERRENCE</h1>
                  <p className="text-center mt-2">
                    {displayedItems.last.referrence}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center flex-col">
                <h1 className="font-bold">DATE</h1>
                <p className="text-center mt-2">{displayedItems.last.date}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {userData.length == 0 ? (
              <div>
                <h1 className="text-2xl mt-10 text-center font-serif">
                  REFERRENCE NOT FOUND
                </h1>
              </div>
            ) : (
              <>
                {userData.map((item) => (
                  <div className="w-full h-auto p-4 bg-[#f3f3f3] shadow-lg shadow-[#dedede] mt-5 rounded-lg	">
                    <div className="flex items-center justify-between gap-5 w-full ">
                      <div>
                        <h1 className="font-bold">AMOUNT</h1>
                        <p className="text-center mt-2">
                          {" "}
                          <span className="font-semibold">PHP </span>
                          {item.amount}
                        </p>
                      </div>
                      <div>
                        <h1 className="font-bold">REFERRENCE</h1>
                        <p className="text-center mt-2">{item.referrence}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-center flex-col">
                      <h1 className="font-bold">DATE</h1>
                      <p className="text-center mt-2">{item.date}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardSearch;
