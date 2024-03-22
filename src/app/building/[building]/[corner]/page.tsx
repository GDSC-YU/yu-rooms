import GoogleButton from "@/components/temp/google_button";
import { GoogleColor } from "@/constants/constants";

export default function corner({
  params,
}: {
  params: { building: string; corner: string };
}) {
  return (
    <main>
      
      <p>
        You are in building {params.building} and corner {params.corner}
      </p>
      <div className="flex gap-6">
        <GoogleButton
          text="Floor 0"
          href={`/building/${params.building}/${params.corner}/0`}
          color={GoogleColor.Red}
          ariaLabel="Go to the floor you clicked on"
        />
        <GoogleButton
          text="Floor 1"
          href={`/building/${params.building}/${params.corner}/1`}
          color={GoogleColor.Red}
          ariaLabel="Go to the floor you clicked on"
        />
        <GoogleButton
          text="Floor 2"
          href={`/building/${params.building}/${params.corner}/2`}
          color={GoogleColor.Red}
          ariaLabel="Go to the floor you clicked on"
        />
        <GoogleButton
          text="Floor 3"
          href={`/building/${params.building}/${params.corner}/3`}
          color={GoogleColor.Red}
          ariaLabel="Go to the floor you clicked on"
        />
      </div>
    </main>
  );
}
