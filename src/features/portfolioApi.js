import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";
const username = "Hirazuku";

export const getRepositories = username =>
    axios.get(`${githubAPIBaseURL}/users/${username}/repos`)
        .then(response => response.data);