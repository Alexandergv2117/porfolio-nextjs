import Link from "next/link";
import Image from "next/image";

import Github from "../ui/icons/github";
import Gmail from "../ui/icons/gmail";
import LinkedIn from "../ui/icons/linkedIn";

export default function Profile() {
  return (
    <section className="flex space-x-10">
      <Image
        src="https://avatars.githubusercontent.com/u/74172014?s=400&u=adc6d341b38a9d429a6427a1f6f7a355b3674ec6&v=4"
        alt="Profile picture of Alexander Garcia"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center items-start space-y-4">
        <span className="font-bold text-3xl">Alexander Garcia</span>
        <ul className="flex flex-row space-x-4">
          <li>
            <Link
              aria-label="Link to Github profile"
              href="https://github.com/Alexandergv2117"
              target="_blank"
              className="flex rounded-full p-2 bg-white bg-opacity-10 w-auto hover:bg-opacity-20"
            >
              <Github width={"1.5rem"} height={"1.5rem"} />
            </Link>
          </li>
          <li className="flex rounded-full p-2 bg-white bg-opacity-10 w-auto cursor-pointer hover:bg-opacity-20">
            <Gmail width={"1.5rem"} height={"1.5rem"} />
          </li>
          <li>
            <Link
              aria-label="Link to Github profile"
              href="https://www.linkedin.com/in/alexander-garcia-vizcarra-329765257/"
              target="_blank"
              className="flex rounded-full p-2 bg-white bg-opacity-10 w-auto hover:bg-opacity-20"
            >
              <LinkedIn width={"1.5rem"} height={"1.5rem"} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
