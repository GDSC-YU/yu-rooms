import { Event } from "react-big-calendar";

export interface CustomEvent extends Event {
  id: number;
  departments: string[];
  room: string;
  bookedBy: string;
}
