import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function CardProductItem({ content }) {
  const [imgValue, setImgValue] = useState(
    "https://cf.shopee.vn/file/360aaa8c2d359db81c5192d953e55e9b"
  );

  useEffect(() => {
    if (content.length > 0) {
      setImgValue(content[0]);
    }
  }, [content]);
  return (
    <Card sx={{ width: "300px" }}>
      <CardActionArea>
        <CardMedia>
          <CardMedia
            component="img"
            height="300"
            image={imgValue}
            alt="green iguana"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tinh chất tăng cường tế bào gốc chống lão hoá toàn diện
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              đ1.700.000
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#ed4d2d",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "10px"
                }}
              >
                đ1.700.000
              </Typography>
              <Button
                sx={{
                  color: "white"
                }}
              >
                <Avatar
                  sx={{ bgcolor: "#d0021c", width: "40px", height: "40px" }}
                >
                  <AddShoppingCartIcon />
                </Avatar>
              </Button>
            </Box>
          </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
}
