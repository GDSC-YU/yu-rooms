import Link from "next/link";
import { redirect } from "next/navigation";
import {
  tuwaiqCorners,
  mainBuildingCorners,
  Buildings,
  GoogleColor,
} from "@/constants/constants";
import GoogleButton from "@/components/temp/google_button";
export default function Building({ params }: { params: { building: string } }) {
  let cornersArray: string[] = [];
  if (params.building === Buildings.Najd) {
    redirect("/najd/D");
  } else if (params.building === Buildings.Tuwaiq) {
    cornersArray = tuwaiqCorners;
  } else if (params.building === Buildings.Main) {
    cornersArray = mainBuildingCorners;
  }
  return (
    <main>
      <h1 className="text-center text-2xl font-bold">
        {params.building.toUpperCase()}
      </h1>
      <div className="flex gap-6">
        {cornersArray.map((corner) => {
          return (
            <GoogleButton
              text={`${corner} corner`}
              color={GoogleColor.Blue}
              href={`/${params.building}/${corner}`}
              ariaLabel={`Go to ${corner} corner`}
            />
          );
        })}
      </div>
    </main>
  );
}
