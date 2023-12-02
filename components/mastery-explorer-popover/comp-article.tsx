import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Icons from "../ui/icons";
import { cn } from "@/lib/utils";

export type tArticle = {
    title: string,
    description: string,
    url: string,
    imageBanner?: string,
    publishedAt: Date
}

const CompArticle = ({ articleData }: { articleData: tArticle }) => {
    const { title, description, url, imageBanner, publishedAt } = articleData;

    return (
        <div className="h-full w-full flex items-stretch p-1.5">
            <div className={cn("prose-md", imageBanner ? "w-3/5" : "w-full")}>
                <h6 className="line-clamp-3 leading-normal mb-2 font-medium">{title}</h6>

                <small className="line-clamp-6 leading-normal text-muted-foreground font-normal">{description}</small>
            </div>

            {imageBanner && <div className="relative w-2/5 h-full">
                <Image
                    className="object-cover brightness-75"
                    src={imageBanner}
                    fill
                    alt="Bainer de preview para o blog"
                />

                <Link href={url} target="_blank">
                    <Button
                        variant="link"
                        className="absolute top-0.5 right-0 text-zinc-200/80 hover:text-zinc-200"
                    >
                        <Icons.PhArrowSquareOutDuotone className="w-4 h-4" />
                    </Button>
                </Link>
            </div>}
        </div>
    )
}

export default CompArticle;