import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { addUserModalType } from "../../types/addUserModalType";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { formModalType } from "../../types/addUserModalType";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import createUser from "../../hooks/createUser";
import ButtonLoading from "../looading/buttonLoading";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const AddUserModal: React.FC<addUserModalType> = ({ open, handleClose }) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const { handleCreate, createLoading } = createUser();

  const { control, register, handleSubmit } = useForm<formModalType>({
    shouldUseNativeValidation: true,
  });

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const formatDate = (date: Dayjs | null) => {
    return date ? date.format("DD-MM-YYYY") : "";
  };
  const onSubmit: SubmitHandler<formModalType> = async (
    data: formModalType
  ) => {
    handleCreate(data.amount, data.referrence, formatDate(selectedDate));
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="w-full flex items-end justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl cursor-pointer"
                onClick={handleClose}
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                />
              </svg>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-3">
                  <div>
                    <p className="text-xl text-[#b3b3b3]">Amount *</p>
                  </div>
                  <div>
                    <Controller
                      name="amount"
                      control={control}
                      rules={{ required: "Please enter your Amount." }}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="Enter your Amount"
                          type="number"
                          className="w-full mt-3 bg-[#e5e5e5] text-[#111111] px-4 py-4 border border-[#e5e5e5] outline-none rounded-full"
                          onInput={handleInput} // Restrict non-numeric input
                          onChange={(e) => {
                            const value = parseFloat(e.target.value) || null; // Convert to number
                            field.onChange(value);
                          }}
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <div>
                    <p className="text-xl text-[#b3b3b3]">Referrence *</p>
                  </div>
                  <div>
                    <input
                      placeholder="Enter your Referrence"
                      className="w-full mt-3 bg-[#e5e5e5] text-[#111111] px-4 py-4  border border-[#e5e5e5] outline-none rounded-full "
                      {...register("referrence", {
                        required: "Please enter your Referrence.",
                      })} // custom message
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        "DatePicker",
                        "MobileDatePicker",
                        "DesktopDatePicker",
                        "StaticDatePicker",
                      ]}
                    >
                      <DemoItem>
                        <div>
                          <p className="text-xl text-[#b3b3b3]">Date *</p>
                        </div>
                        <MobileDatePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className="flex items-end justify-end mt-4">
                  <button
                    className="bg-[#5710b3] px-3 w-[150px] py-3 text-base text-white rounded-md"
                    type="submit"
                  >
                    {createLoading ? <ButtonLoading /> : "Submit"}
                  </button>
                </div>
              </form>
            </>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AddUserModal;
