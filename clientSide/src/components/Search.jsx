import React from "react";
import { Box, Input, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

import DrawerLayout from "./DrawerLayout";

const Search = ({ show, onSetShow }) => {
  return (
    <DrawerLayout open={show} setOpen={onSetShow}>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={16}
          // borderBottom="1px solid gray"
          p="10px 30px"
        >
          <Input placeholder="Search for products..." color="secondary" />
          <IconButton onClick={() => onSetShow(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>
    </DrawerLayout>
  );
};

export default Search;
