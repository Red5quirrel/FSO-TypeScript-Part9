import React from "react";

export enum WeatherEnum {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Stormy = "stormy",
  Windy = "windy",
  Default = "",
}

export enum VisibilityEnum {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
  Default = "",
}

export interface Diaries {
  id: string;
  date: string;
  weather: WeatherEnum;
  visibility: VisibilityEnum;
  comment?: string;
}

export type NewDiary = Omit<Diaries, "id">;

interface Setter {
  setNewDiary: React.Dispatch<React.SetStateAction<NewDiary>>;
}

export interface DateTypeProps extends Setter {
  date: string;
}

export interface VisibilityTypeProps extends Setter {
  visibility: string;
}
export interface WeatherTypeProps extends Setter {
  weather: string;
}
export interface CommentTypeProps extends Setter {
  comment?: string;
}
