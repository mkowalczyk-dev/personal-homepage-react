import axios from "axios";

export const githubAPIBaseURL = "https://api.github.com";
export const githubUsername = "mkowalczyk-dev";

export const getRepositories = (username) => {
  return Promise.all([
    axios.get(`${githubAPIBaseURL}/users/${username}/repos`),
    axios.get(`${githubAPIBaseURL}/repos/mg-wiewiora/movies-browser-react`)
  ]).then(([reposRes, repoRes]) => {
    
    const addOGImage = (repo) => {
      // 1. Domyślny obrazek generowany przez GitHub (ten co miałeś)
      const githubGeneratedImage = `https://opengraph.githubassets.com/1/${repo.full_name}`;
      
      // 2. Twój konkretny obrazek z folderu public w repozytorium
      // Używamy raw.githubusercontent.com, aby pobrać plik bezpośrednio
      const customOGImage = `https://raw.githubusercontent.com/${repo.full_name}/main/public/og-image.png`;

      return {
        ...repo,
        social_image_url: githubGeneratedImage, // Standardowy podgląd
        custom_og_image: customOGImage          // Twoja ścieżka z repozytorium
      };
    };

    return [
      addOGImage(repoRes.data),
      ...reposRes.data.map(addOGImage)
    ];
  });
};