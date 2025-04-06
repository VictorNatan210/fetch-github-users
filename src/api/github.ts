import { Octokit } from "@octokit/rest";
import { NextApiRequest, NextApiResponse } from "next";

const octokit = new Octokit({ auth: process.env.GITHUB_ });