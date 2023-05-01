// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PropsCardBox } from '../../@Types/api.github';

import api from '../../service/api';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<PropsCardBox>
) => {
    // const [ repos, setRepos ] = useState<PropsRepository[]>([]);

    // await fetch('https://api.github.com/users/dc7devs/repos')
    // .then((repositories) => {
    //     console.log(repositories.json())
        // .map((repo: any) => {
        //     const data: PropsRepository = {
        //         nameRepo: repo.data.name,
        //         descriptionRepo: repo.description,
        //         starsCount: repo.stargazers_count,
        //         language: repo.language,
        //         lastEdition: repo.updated_at,
        //         githubRepositoryUrl: repo.html_url
        //     }

        // })
    // })
    
    // res.status(200).json(repos);
}

export default handler;