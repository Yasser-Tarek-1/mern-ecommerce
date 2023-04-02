import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Container,
  Typography,
  List,
  ListItem,
  Badge,
  Paper,
  Button,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../store/slices/userLoginSlice";
import { toast } from "react-toastify";

const Header = ({ onSetShowCart, onSetShowSearch, onSetShowFavorite }) => {
  const userToken = localStorage.getItem("userToken");
  const { token } = useSelector((state) => state.login);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const btnHandler = () => {
    if (token && userToken) {
      // logout
      dispatch(logOut());
      localStorage.clear();
      toast.success("You logout successfully");
    } else {
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1d1d1c",
        width: "100%",
        color: "#fff",
        position: "fixed",
        boxShadow: 3,
        zIndex: 999,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
        >
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
                style={{
                  color: "white",
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
                href="/#categories"
              >
                Categories
              </a>
            </ListItem>
          </List>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "35px",
                },
                textTransform: "uppercase",
                p: "8px 0",

                fontWeight: "bold",
              }}
              component="h1"
            >
              MernStore.
            </Typography>
          </Link>
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <IconButton onClick={() => onSetShowSearch(true)}>
              <SearchIcon
                sx={{
                  color: "white",
                  fontSize: "26px",
                }}
              />
            </IconButton>

            {token && userToken && (
              <>
                <IconButton onClick={() => onSetShowFavorite(true)}>
                  <FavoriteBorderIcon
                    sx={{
                      color: "white",
                      fontSize: "26px",
                    }}
                  />
                </IconButton>
                <IconButton onClick={() => onSetShowCart(true)}>
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartOutlinedIcon
                      sx={{
                        color: "white",
                        fontSize: "26px",
                      }}
                    />
                  </Badge>
                </IconButton>
              </>
            )}

            <Button
              onClick={btnHandler}
              color="secondary"
              variant="contained"
              sx={{
                ml: "22px",
                textTransform: "capitalize",
              }}
            >
              {token && userToken ? "logout" : "login"}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
