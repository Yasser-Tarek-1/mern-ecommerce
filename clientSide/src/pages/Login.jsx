import React, { useEffect } from "react";

import { Box, Stack } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { authBanner } from "../assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Login = () => {
  const { success, error, token } = useSelector((state) => state.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      localStorage.setItem("userToken", token);
      toast.success(success);
      navigate("/");
    }
    if (error) {
      toast.error(error);
    }
  }, [success, error]);

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #9b55e5, #3e17d0)",
        minHeight: "100vh",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <Box
          flex={1}
          textAlign={"center"}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <img src={authBanner} alt="authBanner" style={{ maxWidth: "100%" }} />
        </Box>
        <LoginForm />
      </Stack>
    </Box>
  );
};

export default Login;
