import axios from "axios";
import React, { useEffect, useState } from "react";

interface Diaries {
  id: string;
  date: string;
  weather: string;
  visibility: string;
  comment: string;
}

function App() {
  const [diaries, setDiaries] = useState<Diaries[]>([]);
  // const [newDiary, setNewDiary] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/diaries")
      .then((response) => {
        setDiaries(response.data as Diaries[]);
      })
      .catch((error) => {
        console.log("[ERROR]", error);
      });
  }, []);

  const addNewDiary = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Add new Diary</h1>
      <form onSubmit={addNewDiary}>
        <div>
          <label htmlFor="date">Date</label>
          <input type="text" name="date" id="date" />
        </div>
        <div>
          <label htmlFor="visibility">Visibility</label>
          <input type="text" name="visibility" id="visibility" />
        </div>
        <div>
          <label htmlFor="wheather">Wheather</label>
          <input type="text" name="wheather" id="wheather" />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <input type="text" name="comment" id="comment" />
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
