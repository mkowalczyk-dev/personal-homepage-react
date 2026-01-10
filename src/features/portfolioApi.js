import axios from "axios";

export const githubAPIBaseURL = "https://api.github.com";
export const githubUsername = "Hirazuku";

export const getRepositories = username =>
    axios.get(`${githubAPIBaseURL}/users/${username}/repos`)
        .then(response => response.data);