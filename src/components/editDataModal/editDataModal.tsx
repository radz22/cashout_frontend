import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { editDataType } from "../../types/addUserModalType";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { formModalType } from "../../types/addUserModalType";
import editData from "../../hooks/editData";
import { dataEditType } from "../../types/dataEditType";
import ButtonLoading from "../looading/buttonLoading";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const EditDataModal: React.FC<editDataType> = ({
  open,
  handleCloseModalData,
  data,
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);
  const { control, register, handleSubmit, reset } = useForm<formModalType>({
    defaultValues: {
      amount: data?.amount || 0,
      referrence: data?.referrence || "",
    },
  });
  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
  };
  const formatDate = (date: Dayjs | null) => {
    return date ? date.format("DD-MM-YYYY") : "";
  };
  const stringDate = data?.date;
  const convertedDate = dayjs(stringDate, "DD-MM-YYYY");
  const { handleEdit, EditLoading } = editData();
  const onSubmit: SubmitHandler<formModalType> = async (
    dataForm: formModalType
  ) => {
    const editData: dataEditType = {
      id: data?._id,
      amount: dataForm.amount,
      referrence: dataForm.referrence,
      date: selectedDate == null ? convertedDate : formatDate(selectedDate),
    };
    handleEdit(editData);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
  };
  useEffect(() => {
    if (data) {
      reset({
        amount: data.amount,
        referrence: data.referrence,
      });
    }
  }, [data, reset]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModalData}
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
                onClick={handleCloseModalData}
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
                          value={selectedDate || convertedDate}
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
                    {EditLoading ? <ButtonLoading /> : "Save Change"}
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

export default EditDataModal;
