import React from "react";
import { NewDiary, VisibilityEnum, VisibilityTypeProps } from "../utils/types";

const Visibility: React.FC<VisibilityTypeProps> = ({ visibility, setNewDiary }) => {
  const handleVisibilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedVisibility = e.target.value as VisibilityEnum;
    setNewDiary((prevDiary: NewDiary) => ({
      ...prevDiary,
      visibility: selectedVisibility,
    }));
  };

  return (
    <div className="visibility_and_weather_container">
      <p>Visibility: </p>
      <div>
        <div>
          <label htmlFor="great">Great</label>
          <input type="radio" name="visibility" id="great" value="great" checked={visibility === VisibilityEnum.Great} onChange={handleVisibilityChange} />
        </div>
        <div>
          <label htmlFor="good">Good</label>
          <input type="radio" name="visibility" id="good" value="good" checked={visibility === VisibilityEnum.Good} onChange={handleVisibilityChange} />
        </div>
        <div>
          <label htmlFor="ok">Ok</label>
          <input type="radio" name="visibility" id="ok" value="ok" checked={visibility === VisibilityEnum.Ok} onChange={handleVisibilityChange} />
        </div>
        <div>
          <label htmlFor="poor">Poor</label>
          <input type="radio" name="visibility" id="poor" value="poor" checked={visibility === VisibilityEnum.Poor} onChange={handleVisibilityChange} />
        </div>
      </div>
    </div>
  );
};

export default Visibility;
