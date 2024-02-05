"use client";
import SchedulePage from "@/components/schedule/SchedulePage";
import { rooms } from "@/constants/rooms";

export default function Room({
  params,
}: {
  params: { building: string; corner: string; floor: string; room: string };
}) {
  return (
    <SchedulePage
      room={rooms[params.room]}
      backLink={`/${params.building}/${params.corner}/${params.floor}`}
    ></SchedulePage>
  );
}
