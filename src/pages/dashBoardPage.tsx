import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import AddUserModal from "../components/addUserModal/addUserModel";
import DashBoardData from "../hooks/dashBoardData";
import DashBoardSearch from "../components/dashBoardSearch/dashBoardSearch";
import deleteData from "../hooks/deleteData";
import getData1by1 from "../hooks/getData1by1";
import EditDataModal from "../components/editDataModal/editDataModal";
const DashBoardPage = () => {
  const { data } = DashBoardData();
  const { handleDelete } = deleteData();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openModalData, setOpenModalData] = useState<boolean>(false);
  const { dataOfOne, handleDataOfOne } = getData1by1();

  const handleOpenModalData = () => {
    setOpenModalData(true);
  };
  const handleCloseModalData = () => {
    setOpenModalData(false);
  };

  return (
    <div>
      <div className="flex w-full  ">
        <div className="w-[15%]">
          <Navbar />
        </div>
        <div className="w-[60%] bg-[#e7e7e7] ">
          <div className="px-5 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold font-serif">
                  Total Cashout ({data.length})
                </h1>
              </div>
              <div>
                <button
                  className="bg-[#5710b3] px-3 w-[150px] py-3 text-lg text-white rounded-md font-semibold"
                  onClick={handleOpen}
                >
                  + Add new
                </button>
              </div>
            </div>

            <div className="mt-16 flex items-end justify-between">
              <div className="w-[20%]">
                <h1 className="font-semibold text-xl text-center">AMOUNT</h1>
              </div>
              <div className="w-[20%]">
                <h1 className="font-semibold text-xl text-center">
                  REFERRENCE
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="font-semibold text-xl text-center">DATE</h1>
              </div>

              <div className="w-[20%]">
                <h1 className="font-semibold text-xl text-center">ACTION</h1>
              </div>
            </div>
            <div className="mt-12 overflow-y-auto h-[63vh]">
              {data.map((item) => (
                <div
                  className="  w-full  bg-[#f9f9f9] p-4 mt-5 rounded-lg	shadow-lg shadow[#ededed]  "
                  key={item._id}
                >
                  <div className="flex items-center justify-between  ">
                    <div className=" w-[20%]">
                      <p className="text-center ">
                        <span className="font-bold">PHP</span> {item.amount}
                      </p>
                    </div>
                    <div className=" w-[20%]">
                      <p className="text-center ">{item.referrence}</p>
                    </div>

                    <div className=" w-[20%]">
                      <p className="text-center text-lg">{item.date}</p>
                    </div>
                    <div className=" w-[20%] flex items-center justify-center gap-4 ">
                      <div
                        className="bg-[#dedb00] p-2 rounded-full cursor-pointer"
                        onClick={() => {
                          handleDataOfOne(item._id);
                          handleOpenModalData();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="text-2xl text-black"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          >
                            <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
                            <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
                          </g>
                        </svg>
                      </div>
                      <div
                        className="bg-[#e00000] p-2 rounded-full	cursor-pointer"
                        onClick={() => handleDelete(item._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="text-2xl text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[25%]">
          <DashBoardSearch />
        </div>
      </div>
      <div>
        <AddUserModal open={open} handleClose={handleClose} />
        <EditDataModal
          open={openModalData}
          handleCloseModalData={handleCloseModalData}
          data={dataOfOne}
        />
      </div>
    </div>
  );
};

export default DashBoardPage;
