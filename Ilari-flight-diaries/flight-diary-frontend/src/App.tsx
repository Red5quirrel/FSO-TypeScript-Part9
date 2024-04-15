import React, { useEffect, useState } from "react";
import { Diaries, NewDiary, WeatherEnum, VisibilityEnum } from "./utils/types";
import { createDiary, getAllDiaries } from "./utils/diaryServices";
import Date from "./components/Date";
import Visibility from "./components/Visibility";
import Weather from "./components/Weather";
import Comment from "./components/Comment";

function App() {
  const [diaries, setDiaries] = useState<Diaries[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [newDiary, setNewDiary] = useState<NewDiary>({ date: "", visibility: VisibilityEnum.Default, weather: WeatherEnum.Default, comment: "" });

  const { date, visibility, weather, comment } = newDiary;

  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));

    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }, [errorMessage]);

  const addNewDiary = (e: React.SyntheticEvent) => {
    e.preventDefault();

    createDiary({ date, visibility, weather, comment }).then((data) => {
      if (data?.error) {
        const getErrorMsg = data?.error.split(".")[1];
        setErrorMessage(getErrorMsg);
      } else if (data?.success) {
        setNewDiary({ date: "", visibility: VisibilityEnum.Default, weather: WeatherEnum.Default, comment: "" });
        return setDiaries(diaries.concat(data.success));
      }
    });
  };

  return (
    <>
      <h1>Add new Diary</h1>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <form onSubmit={addNewDiary}>
        <Date date={date} setNewDiary={setNewDiary} />
        <Visibility visibility={visibility} setNewDiary={setNewDiary} />
        <Weather weather={weather} setNewDiary={setNewDiary} />
        <Comment comment={comment} setNewDiary={setNewDiary} />
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
