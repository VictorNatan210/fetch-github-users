import { NextApiResponse, NextApiRequest } from 'next';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default async function getGithubUser(req: NextApiRequest, res: NextApiResponse) {
    const { username } = req.query;
    if (typeof username !== 'string') {
        return res.status(400).json({ error: 'Username invalido.' })
    }

    try {
        const { data: userinfo } = await octokit.users.getByUsername({ username: username });
        return res.status(200).json(userinfo);
    } catch (err:any) {
        return res.status(err.status || 500).json({ error: err.message });
    }
}