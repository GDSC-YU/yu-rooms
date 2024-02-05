import { Room, rooms } from "./rooms";

export enum GoogleColor {
  Blue = "bg-google-blue",
  Red = "bg-google-red",
  Yellow = "bg-google-yellow",
  Green = "bg-google-green",
}

export enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
}

export const roomTypeMap: {
  [key: string]: {
    headerColor: GoogleColor;
    freeColor: GoogleColor;
    link: string;
  };
} = {
  E: {
    headerColor: GoogleColor.Blue,
    freeColor: GoogleColor.Blue,
    link: "/corners/E",
  },
  F: {
    headerColor: GoogleColor.Red,
    freeColor: GoogleColor.Red,
    link: "/corners/F",
  },
  G: {
    headerColor: GoogleColor.Yellow,
    freeColor: GoogleColor.Yellow,
    link: "/corners/G",
  },
  H: {
    headerColor: GoogleColor.Green,
    freeColor: GoogleColor.Green,
    link: "/corners/H",
  },
};

export const getDays = (room: Room) => {
  return [
    { day: "Sunday", key: Day.Sunday, timeSlots: room.sunday },
    { day: "Monday", key: Day.Monday, timeSlots: room.monday },
    { day: "Tuesday", key: Day.Tuesday, timeSlots: room.tuesday },
    { day: "Wednesday", key: Day.Wednesday, timeSlots: room.wednesday },
    { day: "Thursday", key: Day.Thursday, timeSlots: room.thursday },
  ];
};

export enum Buildings {
  Tuwaiq = "tuwaiq",
  Najd = "najd",
  Main = "main",
}

export const tuwaiqCorners: string[] = ["E", "F", "G", "H"];
export const mainBuildingCorners: string[] = ["B", "C"];

export const roomsExtractor = ({
  corner,
  floor,
}: {
  corner: string;
  floor: string;
}) => {
  let roomsArray: string[] = Object.keys(rooms).sort();
  return roomsArray.filter((room) => {
    if (room.startsWith(corner)) {
      if (room.charAt(1) === floor) {
        return true;
      }
    }
  });
};
