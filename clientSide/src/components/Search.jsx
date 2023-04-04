import React from "react";
import { Box, Input, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

import DrawerLayout from "./DrawerLayout";

import { useState } from "react";
import SearchItem from "./SearchItem";

import { productsData } from "../services";

const Search = ({ show, onSetShow }) => {
  const [search, setSearch] = useState("");

  const { data, error, isLoading } = productsData();

  const searchHandler = () => {
    if (search) {
      return data?.products.filter((product) => {
        return product.title.includes(search);
      });
    }
    return [];
  };

  return (
    <DrawerLayout open={show} setOpen={onSetShow}>
      <Box sx={{ p: "10px 30px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={16}
          // borderBottom="1px solid gray"
        >
          <Input
            placeholder="Search for products..."
            color="secondary"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <IconButton onClick={() => onSetShow(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack
          gap={2}
          direction="column"
          alignContent="center"
          justifyContent="center"
          sx={{
            mt: {
              xs: "30px",
              md: "50px",
            },
          }}
        >
          {!search && (
            <Typography>
              Enter the name of what you want to search for...
            </Typography>
          )}
          {searchHandler().length === 0 && search ? (
            <Typography>Not available in the store...</Typography>
          ) : (
            searchHandler().map((item) => {
              return (
                <SearchItem
                  onSetShow={onSetShow}
                  onSetSearch={setSearch}
                  key={item._id}
                  {...item}
                />
              );
            })
          )}
        </Stack>
      </Box>
    </DrawerLayout>
  );
};

export default Search;
