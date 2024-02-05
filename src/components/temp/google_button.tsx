import { GoogleColor } from "@/constants/constants";
import Link from "next/link";
interface Props {
  text: string;
  color: GoogleColor;
  href: string;
  ariaLabel: string;
}
const GoogleButton = ({ text, color, href, ariaLabel }: Props) => {
  return (
    <Link
      href={href}
      rel="prefetch"
      className={`${color} w-11/12 rounded-2xl py-9 text-center transition duration-300 ease-in-out hover:scale-110 md:w-5/6`}
      aria-label={ariaLabel}
    >
      <span className="text-2xl font-bold">{text}</span>
    </Link>
  );
};

export default GoogleButton;
