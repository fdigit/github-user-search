// services/githubApi.js
const GITHUB_API_BASE_URL = 'https://api.github.com';

export const getUser = async (username) => {
  const response = await fetch(`${GITHUB_API_BASE_URL}/users/${username}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
