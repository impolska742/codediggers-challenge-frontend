import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  UserCard,
  UserName,
  UserHandle,
  UserCardContainer,
} from "./Task3Elements";
import "./Task3.css";

const Task3 = () => {
  const [userData, setUserData] = useState({});
  const [contests, setContests] = useState([]);

  const getUserData = async () => {
    const response = await axios.get(
      "https://api.codedigger.tech/auth/profile/shivamsinghal1012/?platform=codeforces"
    );

    const data = await response.data.result;
    setUserData(data);
    setContests(data.contestRank);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserCardContainer>
      <UserCard className="user-card">
        <UserName>{userData.name}</UserName>
        <UserHandle>Codeforces : @{userData.handle}</UserHandle>
        <p>Current Rating : {userData.rating}</p>
        <p>Max Rating : {userData.maxRating}</p>
        <p>Current Rank : {userData.rank}</p>
        <p>Max Rank : {userData.maxRank}</p>
        <p>World Rank : {userData.worldRank}</p>
        <p>Country Rank : {userData.countryRank}</p>
        <p>Organisation Rank : {userData.organizationRank}</p>
        <div className="user-contests">
          <h5>Contests :-</h5>
          {contests.map((contestRank, idx) => {
            const { contest } = contestRank;
            return (
              <div key={idx} className="contest">
                <p className="bold">Contest Name : {contest.name}</p>
                <p>World Rank : {contestRank.worldRank}</p>
                <p>Country Rank : {contestRank.countryRank}</p>
                <p>Organization Rank : {contestRank.organizationRank}</p>
              </div>
            );
          })}
        </div>
      </UserCard>
    </UserCardContainer>
  );
};

export default Task3;
