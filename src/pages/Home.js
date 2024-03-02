// pages/Home.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserProfile from '../components/UserProfile';
import { getUser } from '../services/githubApi';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CardContainer = styled.div`
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const searchUser = async (username) => {
    try {
      const userData = await getUser(username);
      setUser(userData);
      setError(null);
    } catch (error) {
      setUser(null);
      setError(error.message);
    }
  };

  return (
    <AppContainer>
      <CardContainer>
        <h1>GitHub User Search</h1>
        <SearchBar onSearch={searchUser} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && <UserProfile user={user} />}
      </CardContainer>
    </AppContainer>
  );
};

export default Home;
