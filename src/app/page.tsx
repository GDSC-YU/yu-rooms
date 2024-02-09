import GoogleButton from "@/components/temp/google_button";
import { GoogleColor, Buildings } from "@/constants/constants";
import { bgImage1 } from "../../assets/images";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex h-[100lvh] flex-col items-center justify-center p-5 text-center md:gap-y-10">
      <Image
        src={bgImage1}
        alt="background-image"
        className="absolute h-full w-full object-cover"
      ></Image>
    </main>
  );
}
