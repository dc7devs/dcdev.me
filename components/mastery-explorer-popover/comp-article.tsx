import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Icons from "../ui/icons";
import { cn } from "@/lib/utils";

export type tArticle = {
    previewTitle: string,
    previewDescription: string,
    articleURL: string,
    previewImage?: string,
    publishedAt: Date
}

const CompArticle = ({ articleData }: { articleData: tArticle }) => {
    const {
        previewTitle,
        previewDescription,
        articleURL,
        previewImage,
        publishedAt
    } = articleData;

    return (
        <div className="h-full w-full flex items-stretch p-1.5">
            <div className={cn("prose-md", previewImage ? "w-3/5" : "w-full")}>
                <h6 className="line-clamp-3 leading-normal mb-2 font-medium">{previewTitle}</h6>

                <small className="line-clamp-6 leading-normal text-muted-foreground font-normal">{previewDescription}</small>
            </div>

            {previewImage && <div className="relative w-2/5 h-full">
                <Image
                    className="object-cover brightness-75"
                    src={previewImage}
                    fill
                    alt="Bainer de preview para o blog"
                />

                <Link href={articleURL} target="_blank">
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