export type User = {
  uid: string;
  email: string;
  isPro: boolean;
  streakDays: number;
  targetCalories: number;
};
export type Food = {
  id: string;
  name: string;
  cals: number;
  p: number;
  c: number;
  f: number;
};
export type Exercise = {
  id: string;
  name: string;
  muscle: string;
};
export type Session = {
  id: string;
  name: string;
  exerciseIds: string[];
  completed?: boolean;
};
export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  ts: number;
};
