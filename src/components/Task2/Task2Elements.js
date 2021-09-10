import styled from "styled-components";

export const Form = styled.form`
  text-align: center;
`;

export const FormLabel = styled.label`
  font-size: 1.5rem;
  height: 50px;
`;

export const FormInput = styled.input`
  font-size: 1.25rem;
  height: 50px;
  padding: 5px 10px;
  border: none;
  background: #eee;
  border-radius: 10px 0 0 10px;
`;

export const FormButton = styled.button`
  cursor: pointer;
  font-size: 1.25rem;
  transition: 0.3s all ease-in-out;
  color: #fff;
  border: none;
  padding: 10px 20px;
  outline: none;
  height: 50px;
  background-color: #1c7bfd;
  border-radius: 0 10px 10px 0;

  :hover {
    background-color: rgba(85, 150, 241, 0.824);
    transition: 0.3s all ease-in-out;
  }
`;

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
