require('dotenv').config();
import { Octokit } from "@octokit/rest";
import { NextApiRequest, NextApiResponse } from "next";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default async function request(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;
  if (!username || Array.isArray(username)) {
    return res.status(400).json({ error: "Usuário inválido." });
  }

  try {
    const { data: userinfo } = await octokit.users.getByUsername({ username: username as string });
    res.status(200).json(userinfo);
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message });
  }
}