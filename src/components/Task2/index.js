import React, { useState } from "react";
import axios from "axios";
import { FaUserGraduate, FaPlusCircle } from "react-icons/fa";
import {
  User,
  UserIcon,
  UserTitle,
  UserWebsiteListItem,
  UserDetails,
  UserName,
  UsersList,
} from "./Task2Elements";

const Task2 = () => {
  // https://api.codedigger.tech/auth/search-user?q=
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [check, setCheck] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://api.codedigger.tech/auth/search-user?q=${query}`)
      .then((res) => {
        setUsers(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });

    setCheck(true);
  };

  return (
    <>
      <form
        style={{ textAlign: "center" }}
        method="post"
        onSubmit={handleSubmit}
      >
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="Search user(s)"
            onChange={(e) => {
              return setQuery(e.target.value);
            }}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>

      {check && users.length < 1 ? (
        <h1 style={{ textAlign: "center", margin: "40px" }}>
          Users Not Found!!
        </h1>
      ) : (
        <h1 style={{ textAlign: "center", margin: "40px" }}>
          Search for Users
        </h1>
      )}

      <UsersList className="users">
        {users.map((user, idx) => {
          const {
            name,
            codeforces,
            codechef,
            atcoder,
            spoj,
            uva_handle,
            username,
            email,
            about_user,
            about_mentor,
          } = user;

          console.log(user);
          return (
            <User className="card">
              <UserIcon>
                <FaUserGraduate />
              </UserIcon>
              <UserTitle>Name : {name}</UserTitle>
              <UserDetails>
                <UserWebsiteListItem>CodeChef : {codechef}</UserWebsiteListItem>
                <UserWebsiteListItem>
                  Codeforces : {codeforces}
                </UserWebsiteListItem>
                <UserWebsiteListItem>AtCoder : {atcoder}</UserWebsiteListItem>
                <UserWebsiteListItem>Spoj : {spoj}</UserWebsiteListItem>
                <UserWebsiteListItem>Uva : {uva_handle}</UserWebsiteListItem>

                <UserName>Username : {username}</UserName>
                <p>Email : {email}</p>
                <p>About User : {about_user}</p>
                <p>About User Mentor : {about_mentor}</p>
              </UserDetails>
            </User>
          );
        })}
      </UsersList>
    </>
  );
};

export default Task2;
