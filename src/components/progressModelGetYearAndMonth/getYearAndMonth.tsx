import React from "react";
import DashBoardData from "../../hooks/dashBoardData";
const getYearAndMonthData = (year: string) => {
  const { data } = DashBoardData();

  /* getData by Year*/
  const filterByYear = data.filter((item) => item.year == year);

  /* get total January*/
  const january = filterByYear.filter((item) => item.month == "January");

  const januaryAmount = january.map((item) => item.amount);

  const januaryTotal = januaryAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  /* get total February*/

  const february = filterByYear.filter((item) => item.month == "February");

  const februaryAmount = february.map((item) => item.amount);

  const februaryTotal = februaryAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total March*/

  const march = filterByYear.filter((item) => item.month == "March");

  const marchAmount = march.map((item) => item.amount);

  const marchTotal = marchAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total April*/

  const april = filterByYear.filter((item) => item.month == "April");

  const aprilAmount = april.map((item) => item.amount);

  const aprilTotal = aprilAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total May*/

  const may = filterByYear.filter((item) => item.month == "May");

  const mayAmount = may.map((item) => item.amount);

  const mayTotal = mayAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total June*/

  const june = filterByYear.filter((item) => item.month == "June");

  const juneAmount = june.map((item) => item.amount);

  const juneTotal = juneAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total July*/

  const july = filterByYear.filter((item) => item.month == "July");

  const julyAmount = july.map((item) => item.amount);

  const julyTotal = julyAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total Aug*/

  const august = filterByYear.filter((item) => item.month == "August");

  const augustAmount = august.map((item) => item.amount);

  const augustTotal = augustAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total Sept*/

  const september = filterByYear.filter((item) => item.month == "September");

  const septemberAmount = september.map((item) => item.amount);

  const septemberTotal = septemberAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total Oct*/

  const october = filterByYear.filter((item) => item.month == "October");

  const octoberAmount = october.map((item) => item.amount);

  const octoberTotal = octoberAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total Nov*/

  const november = filterByYear.filter((item) => item.month == "November");

  const novemberAmount = november.map((item) => item.amount);

  const novemberTotal = novemberAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  /* get total December*/

  const december = filterByYear.filter((item) => item.month == "December");

  const decemberAmount = december.map((item) => item.amount);

  const decemberTotal = decemberAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return {
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
  };
};

export default getYearAndMonthData;
