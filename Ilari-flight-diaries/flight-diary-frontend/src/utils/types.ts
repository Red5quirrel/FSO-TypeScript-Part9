export interface Diaries {
  id: string;
  date: string;
  weather: string;
  visibility: string;
  comment: string;
}

export type NewDiary = Omit<Diaries, "id">;
