import Image from "next/image";
import Link from "next/link";
import { bgImage2, Gdscyu } from "../../assets/images"; 

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Image
        src={bgImage2}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />


      <Link href="https://gdscyu.netlify.app/">
        <div className="w-64 h-64 md:w-64 md:h-64 absolute top-8 left-8 md:left-14 cursor-pointer z-30">
          <Image src={Gdscyu} alt="Yu Rooms Logo" layout="fill" objectFit="contain" />
        </div>
      </Link>

      <div className="flex-grow flex items-center justify-center p-8 z-10">

        <div className="bg-white md:bg-transparent rounded-t-3xl md:rounded-none shadow-lg md:shadow-none text-center w-full md:w-auto p-6 absolute bottom-0 md:relative md:p-0 z-20">
          <h1 className="text-4xl md:text-6xl text-orange-500 font-bold mb-4 md:mb-0">
            Navigate Your Learning Spaces with Ease
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 md:text-white mt-4 mb-6 md:mt-0">
            Your academic journey starts here.
          </p>
          <Link href="/building">
            <div className="inline-block px-8 py-4 bg-orange-500 text-white text-xl font-semibold rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
              Check Availability!
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
