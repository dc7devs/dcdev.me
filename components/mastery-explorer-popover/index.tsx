import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { ReactNode } from "react";

import Icons from "../ui/icons";
import { cn } from "@/lib/utils";

import CompVideo, { tVideo } from "./comp-video";
import CompArticle, { tArticle } from "./comp-article";
import CompProject, { tProject } from "./comp-project";
import CompCertificateSlide, { tCertificates } from "./comp-certificate-slide";

interface MasteryExplorerPopoverProps {
    children: ReactNode;
    certificateList?: tCertificates;
    articleContent?: tArticle;
    videoContent?: tVideo;
    projectContent?: tProject;
}

export default function MasteryPopover({
    children,
    certificateList,
    articleContent,
    videoContent,
    projectContent,
}: MasteryExplorerPopoverProps) {

    const nav_tabs = {
        certificates: {
            iconTab: <Icons.TabCertificate className="w-4 h-4" />,
            contentComponent: certificateList ? <CompCertificateSlide certificateData={certificateList} /> : <CompDefault />
        },
        article: {
            iconTab: <Icons.TabDocumentAddBold className="w-4 h-4" />,
            contentComponent: articleContent ? <CompArticle articleData={articleContent} /> : <CompDefault />
        },
        video: {
            iconTab: <Icons.TabPlayCircle className="w-4 h-4" />,
            contentComponent: videoContent ? <CompVideo videoData={videoContent} /> : <CompDefault />
        },
        project: {
            iconTab: <Icons.TabOpenSourceFill className="w-4 h-4" />,
            contentComponent: projectContent ? <CompProject projectData={projectContent} /> : <CompDefault /> 
        }
    }

    return (
        <Popover>
            <PopoverTrigger>
                <Button variant={'ghost'} size={'icon'}>
                    {children}
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-96 sm:w-[450px] bg-current/95 backdrop-blur-sm p-1.5">
                <TabsComponent navTabs={nav_tabs} />
            </PopoverContent>
        </Popover>
    );
}

const TabsComponent = ({ navTabs }: {
    navTabs: {
        [key: string]: { iconTab: ReactNode, contentComponent: ReactNode }
    }
}) => {
    const tabsListContent = Object.entries(navTabs).map(([key, value]: any) => {

        return (
            <React.Fragment key={key}>
                <TabsContent value={key} className="w-full h-56 mb-1.5 bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur-sm">
                    {value.contentComponent}
                </TabsContent>
            </React.Fragment>
        );
    })

    const tabsList = Object.keys(navTabs).map(tabKey => {
        const tab = navTabs[tabKey];

        return (
            <React.Fragment key={tabKey}>
                <TabsTrigger value={tabKey} className="data-[state=active]:bg-background/70 hover:bg-background/50 hover:text-foreground/80">
                    {tab.iconTab}
                </TabsTrigger>
            </React.Fragment>
        );
    })

    return (
        <Tabs defaultValue="certificates" className="w-full h-50">
            {tabsListContent}

            <TabsList className="bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur-sm space-x-1">
                {tabsList}
            </TabsList>
        </Tabs>
    )
}

const CompDefault = () => {
    return (
        <div className={cn(
            "h-full w-full flex flex-col items-center justify-center",
            "relative bg-top bg-no-repeat bg-cover",
            "bg-[url(/images/projects/alternative-back.png)]"
        )}>
            <Icons.QuillEyeClosed className="w-10 h-10 relative z-20 text-zinc-200/90" />
            <small className="z-20 text-zinc-200/90"><strong>Ainda Indisponível</strong></small>

            <span className="absolute h-full w-full top-0 left-0 bg-zinc-800/30 backdrop-blur-sm z-10"></span>
        </div>
    )
}