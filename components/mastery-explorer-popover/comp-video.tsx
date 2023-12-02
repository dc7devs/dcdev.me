import Link from "next/link"
import { cn } from "@/lib/utils"

import Icons from "../ui/icons"
import { Button } from "../ui/button"

export type tVideo = {
    youtubeURL: string,
    youtubeThumbURL: string
}

const CompVideo = ({ videoData: { youtubeURL, youtubeThumbURL } }: { videoData: tVideo }) => {

    // const randomNumber = Math.floor(Math.random() * 1000000);
    // await genereteScreenshot(youtubeURL, `content/mastery/screenshots/youtube_${randomNumber}.png`);
    // const bannerImage = `bg-[url('/content/mastery/screenshots/youtube_${randomNumber}.png')]`;

    return (
        <div className={cn(
            "h-full w-full flex items-center justify-center p-1.5",
            "relative bg-top bg-no-repeat bg-cover",
            "bg-[url(/images/projects/alternative-back.png)]"
        )}>
            <Link href={youtubeURL} target="_blank" className="relative z-20">
                <Button className="text-xs text-zinc-200/80 hover:text-zinc-200 transition-all" variant="link">
                   <Icons.YoutubeIconFill className="w-3.5 h-3.5 mr-1 align-baseline" /> youtube video
                </Button>
            </Link>

            <span className="absolute h-full w-full top-0 left-0 bg-zinc-800/30 backdrop-blur-sm z-10"></span>
        </div>
    )
}

export default CompVideo;