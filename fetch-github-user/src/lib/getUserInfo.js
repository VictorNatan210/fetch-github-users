import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export async function getUserInfo(username) {
    try {
        const { data } = await octokit.users.getByUsername({ username });
        return {
            login: data.login,
            name: data.name,
            bio: data.bio,
            publicRepos: data.public_repos,
            followers: data.followers,
            following: data.following,
        };
    } catch (error) {
        console.error(`Error fetching user info for ${username}:`, error);
        throw error;
    }
}