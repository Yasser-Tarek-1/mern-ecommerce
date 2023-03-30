import React from "react";
import { Drawer } from "@mui/material";

const DrawerLayout = ({ open, setOpen, children }) => {
  return (
    <Drawer onClose={() => setOpen(false)} anchor="right" open={open}>
      {children}
    </Drawer>
  );
};

export default DrawerLayout;
