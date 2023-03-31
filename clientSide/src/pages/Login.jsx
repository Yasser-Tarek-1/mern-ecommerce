import React from "react";

import { Box, Stack } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { authBanner } from "../assets";

const Login = () => {
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
