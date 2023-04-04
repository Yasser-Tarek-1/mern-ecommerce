import React from "react";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

const ListItems = () => {
  return (
    <List
      sx={{
        width: "150px",
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <ListItem
        sx={{
          padding: "0 4px",
        }}
      >
        <Link
          className="link-hover"
          style={{
            color: "#fff",
            textDecoration: "none",
            textTransform: "uppercase",
            fontWeight: "normal",
            fontSize: "14px",
          }}
          to="/"
        >
          Home
        </Link>
      </ListItem>
      <ListItem
        sx={{
          padding: "0 4px",
        }}
      >
        <a
          style={{
            color: "white",
            textDecoration: "none",
            textTransform: "uppercase",
            fontWeight: 400,
            fontSize: "14px",
          }}
          className="link-hover"
          href="/#categories"
        >
          Categories
        </a>
      </ListItem>
    </List>
  );
};

export default ListItems;
