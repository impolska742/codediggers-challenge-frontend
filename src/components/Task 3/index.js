import React, { useState, useEffect } from "react";
import axios from "axios";

const Task3 = () => {
  const [userData, setUserData] = useState();

  const getUserData = () => {
    axios
      .get(
        "https://api.codedigger.tech/auth/profile/shivamsinghal1012/?platform=codeforces"
      )
      .then(({ data }) => setUserData(data.result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h1>TASK 3</h1>
    </div>
  );
};

export default Task3;
