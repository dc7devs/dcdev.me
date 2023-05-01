import Link from "next/link";
import { Star } from "phosphor-react";
import { PropsCardBox } from "@/@Types/api.github";

import { intlFormatDistance, parseISO } from 'date-fns';
import cx from "clsx";

export default function CardBox({
    repoTitle,
    vercelURL,
    repoDescription,
    amountStars,
    language,
    lastEdition,
    githubURL,
}: PropsCardBox) {
     
    return (
        <div className="w-full sm:w-96 md:w-96 lg:w-[350px] h-48 dark:bg-black/45 bg-white/45 flex flex-col px-4 py-2.5 rounded backdrop-blur-sm ring-1 dark:ring-white/25 ring-black/25">
            <div className="flex justify-between items-center px-1">
                <div className="text-2xl text-black dark:text-white">{repoTitle}</div>
                {
                    vercelURL && <Link
                        href={cx(vercelURL)}
                        className="text-4xl text-zinc-500 hover:text-black dark:hover:text-zinc-100 hover:transition-colors ease-in select-none"
                        target="__blank"
                    >▲</Link>
                }
            </div>

            <div className="flex-1 overflow-hidden text-ellipsis py-3 pl-2">{repoDescription}</div>

            <div className="flex justify-between items-center text-zinc-500">
                <div className="flex justify-items-stretch items-center">
                    <span className={cx("w-3 h-3", "bg-zinc-500", "rounded-full mr-1")}></span>
                    
                    <div className="text-xs">{language}</div>

                    <span className="w-1 h-1 dark:bg-white bg-black rounded-full mx-2"></span>
                    <div className="text-xs flex">
                        <Star size={15} />
                        <div className="ml-1">{cx(amountStars ? amountStars : "0")}</div>
                    </div>
                    <span className="w-1 h-1 dark:bg-white bg-black rounded-full mx-2"></span>

                    <div className="text-xs">Atualizado {
                        intlFormatDistance(parseISO(lastEdition), new Date)
                    }</div>
                </div>

                <Link href={githubURL} target="__blank">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 hover:transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
                </Link>
            </div>
        </div>
    )
}