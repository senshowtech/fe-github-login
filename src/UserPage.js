import React from "react";
import LoginGithub from "react-login-github";
import axios from "axios";

export default function UserPage() {
  const onSuccess = (response) => {
    axios({
      method: "get",
      url: `http://localhost:5000/github/callback?code=${response.code}`,
    });
  };
  const onFailure = (response) => console.error(response);
  return (
    <LoginGithub
      scope="repo"
      clientId="a513d7d3e6503ef7e756"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
}
