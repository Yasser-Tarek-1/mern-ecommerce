import React, { useCallback, useEffect } from "react";
import {
  Stack,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  IconButton,
  Alert,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import {
  useUpdateUserInfoMutation,
  useUserImageMutation,
} from "../store/querys/userInfoApi";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { userInfo } from "../services";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [file, setFile] = useState("");
  const [open, setOpen] = useState(false);

  const [updateUserInfo] = useUpdateUserInfoMutation();
  const [userImage] = useUserImageMutation();

  const { data, isLoading, isSuccess, isError, url } = userInfo();
  const user = data?.res?.user;

  const deleteAcc = () => {};

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is Required"),
    email: Yup.string()
      .email("Invalid email address.")
      .required("No email provided."),
    phone: Yup.string().required("No phone provided."),
    // password: Yup.string()
    //   .required("No password provided.")
    //   .min(6, "Password is too short."),
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
      {isLoading && (
        <Stack alignItems="center" mt={20}>
          <RotatingLines
            strokeColor="#9c27b0"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Stack>
      )}
      {isSuccess && Object.keys(user).length > 0 && (
        <Formik
          initialValues={{
            username: user?.username,
            email: user?.email,
            // password: user?.password,
            phone: user?.phone,
            image: user?.image,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (file) {
              const formData = new FormData();
              formData.append("image", file);
              userImage(formData)
                .unwrap()
                .then(({ message }) => {
                  // toast.success(message);
                })
                .catch(({ data }) => {
                  // toast.error(data.error);
                });
            }
            updateUserInfo(values)
              .unwrap()
              .then(({ message }) => {
                toast.success(message);
                setEdit(false);
              })
              .catch(({ data }) => {
                toast.error(data.error);
                setEdit(true);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setValues,
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
                  src={(file && URL.createObjectURL(file)) || url}
                  sx={{ width: "220px", height: "220px", boxShadow: 2 }}
                />
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="inputfile"
                  onChange={(e) => {
                    const fileImage = e.target.files[0];
                    setFile(fileImage);
                    setValues({ ...values, image: fileImage.name });
                  }}
                  disabled={!edit}
                />
                <IconButton disabled={!edit} color="secondary" sx={{ p: 0 }}>
                  <label
                    htmlFor="image"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <CameraAltIcon />
                  </label>
                </IconButton>
              </Box>
              <Stack
                gap={2}
                sx={{
                  backgroundColor: "#9e9e9e21",
                  p: "16px",
                  width: {
                    xs: "100%",
                    sm: "550px",
                  },
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
                  <Typography>Phone:</Typography>
                  <TextField
                    disabled={!edit}
                    name="phone"
                    sx={{ width: "80%" }}
                    color="secondary"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Stack>
                {/* password */}
                {/* <Stack
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
                </Stack> */}
                <Stack
                  mt={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="end"
                >
                  {/* <Button
                    onClick={()=> setOpen(true)} 
                    type="button"
                    variant="contained"
                    color="error"
                  >
                    Delete Acc
                  </Button> */}
                  {/* backdrop */}
                  <Dialog
                    open={open}
                    keepMounted
                    onClose={() => setOpen(false)}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>
                      Are you sure you want to delete your account?
                    </DialogTitle>
                    <DialogActions>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </Button>
                      <Button onClick={deleteAcc} color="error" type="button">
                        Delete
                      </Button>
                    </DialogActions>
                  </Dialog>
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
      {isError && (
        <Alert severity="error">
          Problem displaying User Info, Please try later
        </Alert>
      )}
    </Stack>
  );
};

export default Profile;
