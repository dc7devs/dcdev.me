'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import Icons from "../ui/icons";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type tCertificates = Array<{
    credentialCode: string,
    credentialURL: string,
    imageCertificateURL: string
}>

const CompCertificateSlide = ({ certificateData }: { certificateData: tCertificates }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificateData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === certificateData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="h-full w-full items-stretch p-1.5">
            {(certificateData.length > 1) && <>
                <div className="absolute top-[44%] left-0.5 z-10 my-auto">
                    <Button onClick={handlePrev} variant="link" className="text-zinc-200/80 hover:text-zinc-200 transition-transform transform hover:scale-110">
                        <Icons.PhArrowCircleLeftDuotone className="w-5 h-5" />
                    </Button>
                </div>

                <div className="absolute top-[44%] right-0.5 z-10 my-auto">
                    <Button onClick={handleNext} variant="link" className="text-zinc-200/80 hover:text-zinc-200 transition-transform transform hover:scale-110">
                        <Icons.PhArrowCircleRightDuotone className="w-5 h-5" />
                    </Button>
                </div>
            </>}

            {certificateData.map((cData, index) => {
                const { credentialCode, credentialURL, imageCertificateURL } = cData;

                return (
                    <div
                        key={credentialCode}
                        className={cn("relative h-full w-full transition-opacity", "slide", index === currentIndex ? "visible" : "hidden")}
                        style={{ opacity: index === currentIndex ? 1 : 0, transform: `translateX(${100 * (index - currentIndex)}%)` }}
                    >
                        <Image
                            className="object-cover brightness-75"
                            src={imageCertificateURL}
                            alt="imagem de um certificado"
                            fill
                        />

                        <Link href={credentialURL} target="_blank">
                            <Button
                                variant="link"
                                className="absolute top-0.5 right-0 text-zinc-200/80 hover:text-zinc-200"
                            >
                                <Icons.PhArrowSquareOutDuotone className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CompCertificateSlide;