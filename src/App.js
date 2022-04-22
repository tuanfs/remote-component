import React from "react";
import Banner from "./components/Banner";
import CardProductItem from "./components/CardProductItem";

export const App = ({ content = [] }) => {
  return (
    <div>
      <CardProductItem content={content} />
    </div>
  );
};
