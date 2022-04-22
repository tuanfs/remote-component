import React from "react";
import Banner from "./components/Banner";
import CardProductItem from "./components/CardProductItem";

// const typeComponent = {
//   banner: function (content, index) {
//     return <Banner content={content} key={index} />;
//   },
//   card: function (content, index) {
//     return <CardProductItem content={content} key={index} />;
//   }
// };

export const App = ({ sections = [] }) => {
  return (
    <div>
      {sections.map(section => {
        section.children = section.children.map(item => {
          item.children = item.children.map((item, index) => {
            return (
              item.component.type !== "" && (
                <CardProductItem key={index} content={item.component.content} />
              )
            );
          });
          return item;
        });
        return section;
      })}
    </div>
  );
};
