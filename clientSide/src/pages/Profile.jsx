import React from "react";
import {
  Stack,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useGetUserInfoQuery } from "../store/rtk-query/userInfoApi";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({});
  const { data, isLoading, isSuccess, isError, error } = useGetUserInfoQuery();

  useEffect(() => {
    if (data?.res) {
      setUser(data?.res?.user);
    }
  }, [data]);

  // formik
  const formik = useFormik({
    initialValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
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
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Stack
      sx={{
        minHeight: "calc(100vh - 205px)",
        p: "100px 16px 50px",
        color: "#000",
        alignItems: "center",
      }}
      gap={5}
    >
      {isError && <Typography>{error}</Typography>}
      {isLoading && <Typography>Loading...</Typography>}
      {isSuccess && (
        <>
          <Box>
            <Avatar src={""} sx={{ width: "220px", height: "220px" }} />
          </Box>
          <Box sx={{ p: "16px", backgroundColor: "#9e9e9e21", width: "680px" }}>
            <Typography sx={{ fontSize: "20px" }}>User Info</Typography>
            <form
              onSubmit={formik.handleSubmit}
              style={{
                padding: "16px",
                width: "full",
                display: "grid",
                gap: "16px",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                gap={3}
                justifyContent={"space-between"}
              >
                <Typography>Username:</Typography>
                <TextField
                  disabled={!edit}
                  sx={{ width: "80%" }}
                  color="secondary"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={3}
                justifyContent={"space-between"}
              >
                <Typography>Email:</Typography>
                <TextField
                  disabled={!edit}
                  name="email"
                  sx={{ width: "80%" }}
                  color="secondary"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={3}
                justifyContent={"space-between"}
              >
                <Typography>Password:</Typography>
                <TextField
                  disabled={!edit}
                  name="password"
                  sx={{ width: "80%" }}
                  color="secondary"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Stack>
              <Stack
                mt={2}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Button type="button" variant="contained" color="error">
                  Delete Acc
                </Button>
                {!edit && (
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={() => setEdit(true)}
                  >
                    Edit
                  </Button>
                )}
                {edit && (
                  <Button type="submit" variant="contained" color="secondary">
                    Save
                  </Button>
                )}
              </Stack>
            </form>
          </Box>
        </>
      )}
    </Stack>
  );
};

export default Profile;
