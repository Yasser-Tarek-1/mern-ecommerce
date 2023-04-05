import React from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../store/slices/userRegisterSlice";
import { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const SignupForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      image: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is Required"),
      email: Yup.string()
        .email("Invalid email address.")
        .required("No email provided."),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short."),
      phone: Yup.string().required("No phone provided."),
    }),
    onSubmit: (values) => {
      // dispatch(register(values));
      console.log(values);
      console.log(file);
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
        encType="multipart/form-data"
        onSubmit={formik.handleSubmit}
        style={{ maxWidth: "300px", margin: "0 auto" }}
      >
        <Stack width="100%" gap={5} mt="45px">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Avatar
              src={(file && URL.createObjectURL(file)) || ""}
              sx={{ width: "120px", height: "120px", boxShadow: 2 }}
            />
            <input
              type="file"
              name="image"
              id="image"
              className="inputfile"
              onChange={(e) => setFile(e.currentTarget.files[0])}
            />

            <label htmlFor="image" style={{ cursor: "pointer" }}>
              <CameraAltIcon color="secondary" />
            </label>
          </Box>
          <TextField
            label="Username"
            variant="standard"
            color="secondary"
            type="string"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            label="Phone"
            variant="standard"
            color="secondary"
            type="string"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
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
              Sign Up
            </Button>
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Do you have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: "#9c27b0",
                }}
              >
                Login
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default SignupForm;
