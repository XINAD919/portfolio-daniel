import { Octokit } from "@octokit/core";
import { NextApiRequest, NextApiResponse } from "next";

export default async function github(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") {
    try {
      const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
      const { data } = await octokit.request("GET /user/repos", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
        affiliation: "owner",
        sort: "created",
      });
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}
