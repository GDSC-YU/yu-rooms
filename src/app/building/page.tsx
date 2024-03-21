import Image from "next/image";
import Link from "next/link";
import { tuwaiq, mainBulding, GoogleBg } from "../../../assets/images";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-contain bg-center">
      <Image
        src={GoogleBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">



        <div className="absolute top-4 left-4 md:top-4 md:left-4 z-20">
          <Link href="/"
            className="text-lg font-semibold text-orange-500"> ━Yu Rooms
          </Link>
        </div>

        {/* Title */}
        <div className="w-full mt-4 px-4 md:px-0 ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-8 mb-4">Choose A Building</h1>
        </div>

        {/* Buildings grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:p-0">
          {/* Tuwaiq Building */}
          <Link href="/building/tuwaiq">
            <div className="cursor-pointer">
              <Image src={tuwaiq} alt="Tuwaiq Building" width={300} height={200} />
              <p className="text-center mt-2 text-xl md:text-3xl text-gray-900">Tuwaiq Building</p>
              <p className="text-center text-gray-900">E, F, G, and H Classes</p>
            </div>
          </Link>

          {/* Main Building */}
          <Link href="/building/main">
            <div className="cursor-pointer">
              <Image src={mainBulding} alt="Main Building" width={300} height={200} />
              <p className="text-center mt-2 text-xl md:text-3xl text-gray-900">Main Building</p>
              <p className="text-center text-gray-900">B and C Classes</p>
            </div>
          </Link>

          {/* Najd Building */}
          <Link href="/building/najd">
            <div className="cursor-pointer">
              <Image src={mainBulding} alt="Najd Building" width={300} height={200} />
              <p className="text-center mt-2 text-xl md:text-3xl text-gray-900">Najd Building</p>
              <p className="text-center text-gray-900">D Classes</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
