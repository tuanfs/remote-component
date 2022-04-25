import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function CardItem({ item }) {
  return (
    <Card sx={{ width: "300px", margin: "14px" }}>
      <Link to={`/product/${item._id}`}>
        <CardActionArea>
          <CardMedia>
            <CardMedia
              component="img"
              height="300"
              src={item && item.img}
              alt="green iguana"
            ></CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical"
                }}
              >
                {item && item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                {item && item.price}
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
                  {item && item.price}
                </Typography>

                <Avatar
                  sx={{
                    bgcolor: "#d0021c",
                    width: "40px",
                    height: "40px",
                    color: "white"
                  }}
                >
                  <AddShoppingCartIcon />
                </Avatar>
              </Box>
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </Link>
    </Card>
  );
}
