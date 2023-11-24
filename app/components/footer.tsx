import Link from "next/link";
import cx from "clsx";

import { inter } from "@/utils/fonts";

export default function Footer() {
  return (
    <footer className={cx("w-full my-5 px-7 sm:px-0 sm:w-4/5 mx-auto text-sm", inter.className)}>
      <p className="text-black/50 dark:text-white/50 mr-5">
        <Link href={""} target="_blank" className="underline">CC BY-NC-SA 4.0</Link> {new Date().getFullYear()}-PRESENT © dc.devs
      </p>
    </footer>
  )
}