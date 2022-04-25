import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function Coupon({ section }) {
  return (
    <Box sx={{ display: "flex" }}>
      {section.children.map((item, index) => (
        <Box key={index}>
          {item.children.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "100%",
                margin: "4px"
              }}
            >
              <img
                sx={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={item.content && item.content.length > 0 && item.content[0]}
                alt="Banner"
              />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
