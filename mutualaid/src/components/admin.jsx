import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logData, setLogData] = useState({
    username: "",
    password: "",
  });
  const [users, setUsers] = useState(null);
  const [requests, setRequests] = useState(null);

  const handleChange = (event) => {
    setLogData({
      ...logData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(logData);
    axios
      .post("/api/account/adminlogin", logData)
      .then((res) => {
        res.status === 200 ? setIsLoggedIn(true) : setIsLoggedIn(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get("/api/auth/users")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err);
        });
      axios.get("/api/requests");
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return <div>loggedin</div>;
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            value={logData.username}
            onChange={handleChange}
            name="username"
            autoComplete="off"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            value={logData.password}
            onChange={handleChange}
            autoComplete="off"
            name="password"
          />
          <br />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}
