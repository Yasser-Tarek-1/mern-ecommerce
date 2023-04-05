import React from "react";
import {
  Stack,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "../store/rtk-query/userInfoApi";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [file, setFile] = useState("");
  const { data, isLoading, isSuccess, isError, error } = useGetUserInfoQuery();
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const user = data?.res?.user;

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is Required"),
    email: Yup.string()
      .email("Invalid email address.")
      .required("No email provided."),
    password: Yup.string()
      .required("No password provided.")
      .min(6, "Password is too short."),
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
      {isSuccess && Object.keys(user).length > 0 && (
        <Formik
          initialValues={{
            username: user?.username,
            email: user?.email,
            password: user?.password,
            image: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            updateUserInfo(); // => this in rtk query => ابعتلك اي فيها بقي ؟؟؟
            console.log(values); // => دي كل البيانات ماعدا الصوره
            console.log(file); // => دي الصوره لوحدها في اوبجكت
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                padding: "16px",
                width: "full",
                display: "grid",
                gap: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  mb: "32px",
                }}
              >
                <Avatar
                  src={(file && URL.createObjectURL(file)) || user?.image}
                  sx={{ width: "220px", height: "220px", boxShadow: 2 }}
                />
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="inputfile"
                  onChange={(e) => setFile(e.currentTarget.files[0])}
                  disabled={!edit}
                />
                <IconButton disabled={!edit} color="secondary">
                  <label htmlFor="image">
                    <CameraAltIcon />
                  </label>
                </IconButton>
              </Box>
              <Stack
                gap={2}
                sx={{
                  backgroundColor: "#9e9e9e21",
                  p: "16px",
                  width: "680px",
                }}
              >
                <Typography sx={{ fontSize: "20px" }}>User Info</Typography>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
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
              </Stack>
            </form>
          )}
        </Formik>
      )}
    </Stack>
  );
};

export default Profile;
