import GoogleButton from "@/components/temp/google_button";
import { GoogleColor, Buildings } from "@/constants/constants";
export default function Home() {
  return (
    <main className="flex h-[100lvh] flex-col items-center justify-center p-5 text-center md:gap-y-10">
      <h1 className="text-5xl font-bold leading-normal md:text-7xl">
        <span className="text-yu-orange-dark">Tuwaiq</span> Rooms!
      </h1>
      <div className="cards grid w-full grid-cols-2 justify-items-center gap-4 py-10 lg:w-2/3">
        <GoogleButton
          href={`/${Buildings.Tuwaiq}`}
          color={GoogleColor.Red}
          ariaLabel="Tuwaiq"
          text="Tuwaiq"
        />
        <GoogleButton
          href={`/${Buildings.Najd}`}
          color={GoogleColor.Yellow}
          ariaLabel="Najd"
          text="Najd"
        />
        <GoogleButton
          href={`/${Buildings.Main}`}
          color={GoogleColor.Green}
          ariaLabel="Main"
          text="Main"
        />
      </div>
    </main>
  );
}
