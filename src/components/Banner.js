import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function Banner({ content = [] }) {
  const [imgValue, setImgValue] = useState(
    "https://cf.shopee.vn/file/18bb5b3a18824336dcd5ce3ed5f22431"
  );

  useEffect(() => {
    if (content.length > 0) {
      setImgValue(content[0]);
    }
  }, [content]);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%"
      }}
    >
      <img
        sx={{ height: "100%", width: "100%", objectFit: "contain" }}
        src={imgValue}
        alt="Banner"
      />
    </Box>
  );
}
