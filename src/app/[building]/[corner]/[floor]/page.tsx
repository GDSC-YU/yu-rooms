import GoogleButton from "@/components/temp/google_button";
import { GoogleColor, roomsExtractor } from "@/constants/constants";
export default function Floor({
  params,
}: {
  params: { building: string; corner: string; floor: string };
}) {
  let currentFloorArray: string[] = roomsExtractor({
    corner: params.corner,
    floor: params.floor,
  });
  return (
    <main>
      <p>You are in floor {params.floor}</p>
      <div className="flex gap-6">
        {currentFloorArray.map((room) => {
          return (
            <GoogleButton
              href={`/${params.building}/${params.corner}/${params.floor}/${room}`}
              color={GoogleColor.Red}
              ariaLabel="go to the room you clicked on"
              text={room}
              key={room}
            />
          );
        })}
      </div>
    </main>
  );
}
