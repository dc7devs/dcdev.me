import Layout from "../components/layout";
import CardBox from "../components/card-project";
import { useEffect, useState } from "react";
import gh_api from "../service/api";

import { PropsCardBox } from "../@Types/api.github";

export default function Projects() {
    const [repositories, setRepositories] = useState<PropsCardBox[]>([]);

    useEffect(() => {
        gh_api.get("/users/dc7devs/repos")
        .then((repos: any) => {
            setRepositories(
                repos.data.map((repo: any) => {
                    const nowDataFormat: PropsCardBox = {
                        id: repo.id,
                        repoTitle: repo.name,
                        repoDescription: repo.description,
                        amountStars: repo.stargazers_count,
                        language: repo.language,
                        lastEdition: repo.updated_at,
                        githubURL: repo.html_url,
                    };

                    return nowDataFormat;
                })
            );
        }).catch((err) => {
            console.error("ops! ocorreu um erro: " + err);
        })
    }, [])

    return (
        <Layout>
            <div className="w-full h-auto flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-1.5">{
                repositories.map((dataProps: PropsCardBox) => (
                    <CardBox
                        key={dataProps.id}
                        repoTitle={dataProps.repoTitle}
                        vercelURL={dataProps.vercelURL}
                        repoDescription={dataProps.repoDescription}
                        amountStars={dataProps.amountStars}
                        language={dataProps.language}
                        lastEdition={dataProps.lastEdition}
                        githubURL={dataProps.githubURL}
                    />
                ))
            }</div>
        </Layout>
    )
}