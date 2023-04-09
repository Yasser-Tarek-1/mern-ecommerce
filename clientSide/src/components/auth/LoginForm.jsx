import React from "react";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useLoginHandlerMutation } from "../../store/querys/authApi";
import { toast } from "react-toastify";
import { logIn } from "../../store/slices/userSlice";

const LoginForm = () => {
  const [loginHandler] = useLoginHandlerMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("No email provided."),
    }),
    onSubmit: (values) => {
      loginHandler(values)
        .unwrap()
        .then(({ res }) => {
          dispatch(logIn({ token: res?.token, user: null }));
          localStorage.setItem("userToken", res?.token);
          toast.success(res?.message);
          navigate("/");
        })
        .catch(({ data }) => {
          toast.error(data?.error);
        });
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        p: "40px 60px",
        textAlign: "center",
        flex: {
          xs: 1,
          md: 0,
        },
      }}
    >
      <Link
        to="/"
        style={{
          color: "#000",
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "35px",
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
      <form
        onSubmit={formik.handleSubmit}
        style={{ maxWidth: "300px", margin: "0 auto" }}
      >
        <Stack width="100%" gap={5} mt="45px">
          <TextField
            label="Email"
            variant="standard"
            color="secondary"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            variant="standard"
            color="secondary"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Stack width="100%" gap={1}>
            <Button
              width="100%"
              variant="contained"
              color="secondary"
              type="submit"
            >
              Login
            </Button>
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  color: "#9c27b0",
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
