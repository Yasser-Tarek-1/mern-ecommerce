import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

const SearchItem = ({
  _id,
  title,
  price,
  image,
  description,
  category,
  onSetShow,
  onSetSearch,
}) => {
  const searchHandler = () => {
    onSetShow(flase);
    onSetSearch("");
  };
  return (
    <Link
      to={`/products/${_id}`}
      onClick={searchHandler}
      style={{
        textDecoration: "none",
      }}
    >
      {/* <Stack direction="row" sx={{ boxShadow: 2 }}>
        <img src={image} alt={title} style={{ width: "150px" }} />
        <Stack
          sx={{
            ml: "12px",
            maxWidth: "175px",
          }}
        >
          <Typography
            gutterBottom
            component="h3"
            sx={{
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#000",
            }}
          >
            {title}
          </Typography>
          <Typography color="text.secondary">${price}</Typography>
        </Stack>
      </Stack> */}
      <Card
        sx={{
          maxWidth: 345,
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <CardMedia
            component="img"
            style={{ width: "150px" }}
            image={image}
            alt={title}
          />
          <CardContent sx={{ p: 0, pl: "12px" }}>
            <Typography
              gutterBottom
              component="h3"
              sx={{
                width: "fit-content",
                textTransform: "capitalize",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default SearchItem;
