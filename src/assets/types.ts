import { Event } from "react-big-calendar";

export interface CustomEvent extends Event {
  id: string;
  departments: string[];
  room: string;
  bookedBy: string;
}
