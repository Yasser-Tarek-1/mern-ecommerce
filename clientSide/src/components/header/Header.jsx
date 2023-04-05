import React, { useState } from "react";
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
} from "@mui/material";
import HeaderIcons from "./HeaderIcons";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Header = ({}) => {
  const userToken = localStorage.getItem("userToken");
  const { token } = useSelector((state) => state.login);

  const navigate = useNavigate();

  return (
    <>
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
            {/* HeaderIcons in large screen */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              {/* <HeaderIcons {...props} userToken={userToken} token={token} /> */}
            </Box>
            {/* Profile    */}
            <Stack direction="row" alignItems="center">
              {userToken && token ? (
                <Link to="/profile">
                  <Tooltip title="Profile">
                    <IconButton
                      component={motion.button}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      sx={{ px: "2px" }}
                    >
                      <Avatar alt="Profile" sx={{ width: 38, height: 38 }} />
                    </IconButton>
                  </Tooltip>
                </Link>
              ) : (
                <Button
                  component={motion.button}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => navigate("/login")}
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
                  login
                </Button>
              )}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
