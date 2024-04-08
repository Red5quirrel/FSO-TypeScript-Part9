import React, { useEffect, useState } from "react";
import { Diaries, NewDiary } from "./utils/types";
import { createDiary, getAllDiaries } from "./utils/diaryServices";

function App() {
  const [diaries, setDiaries] = useState<Diaries[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [newDiary, setNewDiary] = useState<NewDiary>({ date: "", visibility: "", weather: "", comment: "" });
  const { date, visibility, weather, comment } = newDiary;

  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);

  const addNewDiary = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!date && !visibility && !weather && !comment) {
      return setErrorMessage("All fields are required");
    }

    createDiary({ date, visibility, weather, comment }).then((data) => {
      if (data?.error) {
        const getErrorMsg = data?.error.split(".")[1];
        setErrorMessage(getErrorMsg);
      } else if (data?.success) {
        setNewDiary({ date: "", visibility: "", weather: "", comment: "" });
        return setDiaries(diaries.concat(data.success));
      }
    });
  };

  return (
    <>
      <h1>Add new Diary</h1>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <form onSubmit={addNewDiary}>
        <div>
          <label htmlFor="date">Date</label>
          <input type="text" name="date" id="date" value={date} onChange={(e) => setNewDiary((prevSate) => ({ ...prevSate, date: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="visibility">Visibility</label>
          <input type="text" name="visibility" id="visibility" value={visibility} onChange={(e) => setNewDiary((prevState) => ({ ...prevState, visibility: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="weather">Weather</label>
          <input type="text" name="weather" id="weather" value={weather} onChange={(e) => setNewDiary((prevState) => ({ ...prevState, weather: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <input type="text" name="comment" id="comment" value={comment} onChange={(e) => setNewDiary((prevState) => ({ ...prevState, comment: e.target.value }))} />
        </div>
        <button>Add</button>
      </form>
      <h1>Diary Entries</h1>
      {diaries.map((diary) => {
        return (
          <div className="diaryDiv" key={diary.id}>
            <h3>{diary.date}</h3>
            <p>Visibility: {diary.visibility}</p>
            <p>Weather: {diary.weather}</p>
            <p>Comment: {diary.comment}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
