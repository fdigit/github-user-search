// components/UserProfile.js
import styled from 'styled-components';

const UserProfileContainer = styled.div`
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: #333;
  }

  img {
    max-width: 100px;
    border-radius: 50%;
  }

  p {
    color: #666;
  }
`;

const UserProfile = ({ user }) => {
  return (
    <UserProfileContainer>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <p>Repositories: {user.public_repos}</p>
    </UserProfileContainer>
  );
};

export default UserProfile;
