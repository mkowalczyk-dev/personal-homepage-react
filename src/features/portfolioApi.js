import axios from "axios";

export const githubAPIBaseURL = "https://api.github.com";
export const githubUsername = "Hirazuku";

export const getRepositories = username => {
  return Promise.all([
    axios.get(`${githubAPIBaseURL}/users/${username}/repos`),
    axios.get(`${githubAPIBaseURL}/repos/mg-wiewiora/movies-browser-react`)
  ]).then(([reposRes, repoRes]) => {
    return [
      repoRes.data,
      ...reposRes.data
    ];
  });
};