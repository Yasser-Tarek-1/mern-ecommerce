import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Container,
  Typography,
  Button,
  Avatar,
  IconButton,
  Tooltip,
  MenuItem,
  Badge,
  Menu,
} from "@mui/material";
import { logOut } from "../../store/slices/userLoginSlice";

import HeaderIcons from "./HeaderIcons";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header = (props) => {
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

  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          {/* Logo */}
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
                  xs: "20px",
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
          {/* HeaderIcons */}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <HeaderIcons {...props} userToken={userToken} token={token} />
          </Box>
          {/* Profile */}
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              {userToken && token && (
                <>
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ px: "2px" }}
                  >
                    <MoreVertIcon sx={{ color: "#fff" }} />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    sx={{
                      display: {
                        sm: "none",
                      },
                    }}
                  >
                    <Stack direction="column" p="4px 9px">
                      <IconButton
                        component={motion.button}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                          props.onSetShowSearch(true);
                          setAnchorEl(null);
                        }}
                      >
                        <SearchIcon
                          sx={{
                            fontSize: {
                              xs: "22px",
                              md: "26px",
                            },
                          }}
                        />
                      </IconButton>
                      <IconButton
                        component={motion.button}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                          props.onSetShowFavorite(true);
                          setAnchorEl(null);
                        }}
                      >
                        <FavoriteBorderIcon
                          sx={{
                            fontSize: {
                              xs: "22px",
                              md: "26px",
                            },
                          }}
                        />
                      </IconButton>
                      <IconButton
                        component={motion.button}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                          props.onSetShowCart(true);
                          setAnchorEl(null);
                        }}
                      >
                        <Badge
                          badgeContent={props.cartLength ? props.cartLength : 0}
                          color="secondary"
                        >
                          <ShoppingCartOutlinedIcon
                            sx={{
                              fontSize: {
                                xs: "22px",
                                md: "26px",
                              },
                            }}
                          />
                        </Badge>
                      </IconButton>
                    </Stack>
                  </Menu>
                </>
              )}
            </Box>
            {userToken && token && (
              <Link to="/profile">
                <Tooltip title="Profile">
                  <IconButton
                    component={motion.button}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    sx={{ px: "2px" }}
                  >
                    <Avatar alt="Profile" sx={{ width: 32, height: 32 }} />
                  </IconButton>
                </Tooltip>
              </Link>
            )}
            <Button
              component={motion.button}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={btnHandler}
              color="secondary"
              variant="contained"
              size="small"
              sx={{
                ml: "8px",
                fontSize: {
                  xs: "12px",
                  md: "14px",
                },
                textTransform: "capitalize",
              }}
            >
              {token && userToken ? "logout" : "login"}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
