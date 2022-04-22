import React from "react";
import { Title } from "./components/Title";
import { Button } from "@mui/material";

export const App = ({ name = "World" }) => {
  return (
    <div>
      <Title>Hello {name}! Le Van Tuan</Title>
      <Button variant="contained" sx={{ color: "red" }}>
        Click
      </Button>
    </div>
  );
};
