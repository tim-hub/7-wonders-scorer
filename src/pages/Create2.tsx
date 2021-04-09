import React from "react";
import Spreadsheet from "react-spreadsheet";

const data = [
  [{ value: "Vanilla" }, { value: "Chocolate" }],
  [{ value: "Strawberry" }, { value: "Cookies" }],
];

const Create2 = () => <Spreadsheet data={data} />;

export default Create2;
