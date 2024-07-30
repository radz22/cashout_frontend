import { useState } from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import getYearAndMonthData from "../progressModelGetYearAndMonth/getYearAndMonth";
const ProgressModel = () => {
  const currentYear = new Date().getFullYear().toString();
  const [year, setYear] = useState<string>(currentYear);
  const {
    januaryTotal,
    februaryTotal,
    marchTotal,
    aprilTotal,
    mayTotal,
    juneTotal,
    julyTotal,
    augustTotal,
    septemberTotal,
    octoberTotal,
    novemberTotal,
    decemberTotal,
  } = getYearAndMonthData(year);
  const lineData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August ",
      "September ",
      "October",
      "November ",
      "December",
    ],
    datasets: [
      {
        label: "Monthly cashout",
        data: [
          januaryTotal,
          februaryTotal,
          marchTotal,
          aprilTotal,
          mayTotal,
          juneTotal,
          julyTotal,
          augustTotal,
          septemberTotal,
          octoberTotal,
          novemberTotal,
          decemberTotal,
        ],
        // borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        borderColor: "rgb(255, 99, 71)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-end items-end flex-col">
        <FormControl sx={{ width: 150 }} size="small">
          <InputLabel id="demo-select-small-label">Year</InputLabel>
          <Select
            className="p-1"
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={year}
            label="Year"
            onChange={(e) => setYear(e.target.value as string)}
          >
            <MenuItem value="2024">
              <em>2024</em>
            </MenuItem>
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="2026">2026</MenuItem>
            <MenuItem value="2027">2027</MenuItem>
            <MenuItem value="2028">2028</MenuItem>
            <MenuItem value="2029">2029</MenuItem>
            <MenuItem value="2030">2030</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="relative h-[70vh] flex items-center justify-center  w-full">
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default ProgressModel;
