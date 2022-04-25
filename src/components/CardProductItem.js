import React from "react";
import CardItem from "./CardItem";
import { Box } from "@mui/material";

export default function CardProductItem({ section }) {
  return (
    <Box>
      {section.children.map((item, index) => (
        <div key={index}>
          {item.children.map((item, index) => {
            return (
              <Box sx={{ display: "flex", flexWrap: "wrap" }} key={index}>
                {item.content &&
                  JSON.parse(item.content[3]).map((item, index) => (
                    <Box key={index}>
                      <CardItem item={item} />
                    </Box>
                  ))}
              </Box>
            );
          })}
        </div>
      ))}
    </Box>
  );
}
