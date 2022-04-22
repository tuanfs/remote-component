import React from "react";
import Banner from "./components/Banner";
import CardProductItem from "./components/CardProductItem";

export const App = ({ sections = [] }) => {
  return (
    <div>
      {sections.map((section, item) => (
        <Banner />
      ))}
    </div>
  );
};
