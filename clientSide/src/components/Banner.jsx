import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import { banner } from "../assets";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(to right, #9b55e5, #3e17d0)",
        p: "100px 16px 30px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: "30px",
            md: "50px",
          },
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
          sx={{
            flex: 1,
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontSize: {
                xs: "100px",
                md: "180px",
              },
              fontWeight: "bold",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: "180px",
            }}
          >
            Sales
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              maxWidth: "550px",
              textAlign: "center",
              margin: {
                xs: "0 auto 30px",
                md: "30px auto",
              },
              p: {
                xs: "0 12px",
                md: "0",
              },
            }}
          >
            The biggest discounts on the occasion of the month of Ramadan. You
            can browse the products and buy what you want
          </Typography>
          <Stack direction="row" justifyContent="center" gap={3}>
            <Button
              component={motion.button}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              sx={{
                color: "black",
                border: "1px solid white",
                backgroundColor: "white",
                p: "10px 24px",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <a
                href="/#products"
                style={{
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Shop Now
              </a>
            </Button>
          </Stack>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
          sx={{
            flex: 1,
            width: {
              xs: "300px",
              md: "100%",
            },
          }}
        >
          <img
            src={banner}
            alt="banner"
            style={{
              maxWidth: "100%",
              userSelect: "none",
            }}
            loading="lazy"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Banner;
