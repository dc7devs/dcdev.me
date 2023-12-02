import Link from "next/link";
import { cn } from "@/lib/utils";

import Icons from "../ui/icons";
import { Button } from "../ui/button";

export type tProject = {
    githubURL: string
}

const CompProject = ({ projectData: { githubURL } }: { projectData: tProject }) => {
    
    const isGitHubURLValid = /^https:\/\/github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+(\.git)?$/.test(githubURL);
    const repoName = isGitHubURLValid
    ? githubURL.split('/').pop()?.replace(/\.git$/, '')
    : "link do projeto";

    // await genereteScreenshot(githubURL, `content/mastery/screenshots/${repoName}.png`);
    // const bannerImage = `bg-[url('/content/mastery/screenshots/${repoName}.png')]`;

    return (
        <div className={cn(
            "h-full w-full flex items-center justify-center p-1.5",
            "relative bg-top bg-no-repeat bg-cover",
            "bg-[url(/images/projects/alternative-back.png)]"
        )}>
            <Link href={githubURL} target="_blank" className="relative z-20">
                <Button className="text-xs text-zinc-200/80 hover:text-zinc-200 transition-all" variant="link">
                   <Icons.GithubIconFill className="w-3.5 h-3.5 mr-1 align-middle" /> {repoName}
                </Button>
            </Link>

            <span className="absolute h-full w-full top-0 left-0 bg-zinc-800/30 backdrop-blur-sm z-10"></span>
        </div>
    )
}

export default CompProject;