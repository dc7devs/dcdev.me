import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"w-full my-5 px-4 sm:px-0 sm:w-5/6 md:w-3/4 mx-auto text-sm font-inter"}>
      <p className="text-black/60 dark:text-white/50 mr-5">
        <Link href={""} target="_blank" className="underline">CC BY-NC-SA 4.0</Link> {new Date().getFullYear()}-PRESENT © dc.devs
      </p>
    </footer>
  )
}