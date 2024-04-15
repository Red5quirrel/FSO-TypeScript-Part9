import React from "react";
import { DateTypeProps, NewDiary } from "../utils/types";

const Date: React.FC<DateTypeProps> = ({ date, setNewDiary }) => {
  return (
    <div className="date_and_comment_container">
      <label htmlFor="date">Date</label>
      <input type="date" name="date" id="date" value={date} onChange={(e) => setNewDiary((prevSate: NewDiary) => ({ ...prevSate, date: e.target.value }))} />
    </div>
  );
};

export default Date;
