import * as React from "react";
import { Card, TextField, Button } from "@mui/material";

const Login = () => {
  var cardStyle = {
    display: "block",
    width: "25vw",
    transitionDuration: "0.3s",
    height: "30vw",
    margin: "3vw ",
  };

  return (
    <>
      {" "}
      <center>
        <Card style={cardStyle} variant="outlined">
          <div>WELCOME TO MOVIE BOOKING</div>
          <br></br>
          <br></br>
          <Button color="secondary">visitor</Button>
          <Button color="secondary">owner</Button>
          <div>
            <TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="name"
              variant="filled"
            />
            <br></br>
            <br></br>
            <TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="password"
              variant="filled"
            />
            <br></br>
            <br></br>
            <br></br>
            <Button variant="contained">login</Button>
            <p>forget password?</p>
          </div>

        </Card>
        <p>not a member? sign in</p>
      </center>
      

    </>
  );
};
export default Login;
