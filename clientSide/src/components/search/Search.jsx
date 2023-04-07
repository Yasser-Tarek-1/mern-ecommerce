import React from "react";
import { Box, Input, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

import DrawerLayout from "../../layout/DrawerLayout";

import { useState } from "react";
import SearchItem from "./SearchItem";

import { productsData } from "../../services";

import { searchSvg } from "../../assets";
import { RotatingLines } from "react-loader-spinner";

const Search = ({ show, onSetShow }) => {
  const [search, setSearch] = useState("");

  const { data, isLoading } = productsData();

  const searchHandler = () => {
    if (search) {
      if (data) {
        return data?.products.filter((product) => {
          return product.title.includes(search);
        });
      } else {
        return [];
      }
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
          {search && isLoading && (
            <Stack alignItems="center">
              <RotatingLines
                strokeColor="#9c27b0"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            </Stack>
          )}

          {!search && (
            <Stack
              sx={{
                p: "60px 12px",
              }}
              alignItems={"center"}
            >
              <img
                src={searchSvg}
                alt="searchSvg"
                style={{ maxWidth: "100%" }}
              />
              <Typography sx={{ mb: "6px", textTransform: "uppercase" }}>
                What are you looking for?
              </Typography>
            </Stack>
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
