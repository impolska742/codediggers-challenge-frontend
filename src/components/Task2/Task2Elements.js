import styled from "styled-components";

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  width: 100%;
  max-width: 350px;

  @media screen and (max-width: 1210px) {
    max-width: 400px;
  }

  @media screen and (max-width: 900px) {
    max-width: none;
  }
`;

export const UserIcon = styled.div`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin: 5px;
`;

export const UserTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const UserWebsiteList = styled.div`
  text-align: center;
`;

export const UserWebsiteListItem = styled.p`
  text-align: left;
`;

export const UserDetails = styled.div`
  padding: 20px;
`;

export const UserName = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const UsersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
`;
