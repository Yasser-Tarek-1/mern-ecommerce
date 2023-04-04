import React from "react";
import { Drawer } from "@mui/material";

const DrawerLayout = ({ open, setOpen, children }) => {
  return (
    <Drawer
      onClose={() => setOpen(false)}
      anchor="right"
      open={open}
      sx={{ position: "relative", minHeight: "100vh" }}
    >
      {children}
    </Drawer>
  );
};

export default DrawerLayout;
