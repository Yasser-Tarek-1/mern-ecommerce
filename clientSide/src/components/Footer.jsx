import React from "react";

import { Box, Grid, Stack, Typography, Container } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

import { payment } from "../assets";

const Footer = () => {
  return (
    <Box
      sx={{
        py: "20px",
        backgroundColor: "#1d1d1c",
        width: "100%",
        color: "#fff",
        margin: "auto",
        minHeight: "205px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontSize: {
                  xs: "22px",
                  sm: "30px",
                },
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
              component="h3"
            >
              MernStore.
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "14px",
                maxWidth: "350px",
                textAlign: "left",
                margin: {
                  xs: "16px 0",
                },
              }}
            >
              Conditions of Use & Sale Privacy Notice Interest-Based Ads ©2023,
              Duvera.com, Inc. or its affiliates
            </Typography>
            <Stack direction="row" gap={2} alignItems="center">
              <FacebookIcon
                color="secondary"
                sx={{
                  background: "white",
                  cursor: "pointer",
                }}
              />
              <LinkedInIcon
                color="secondary"
                sx={{
                  background: "white",
                  cursor: "pointer",
                }}
              />
              <InstagramIcon
                color="secondary"
                sx={{
                  background: "white",
                  cursor: "pointer",
                }}
              />
              <PinterestIcon
                color="secondary"
                sx={{
                  background: "white",
                  cursor: "pointer",
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "22px",
                },
              }}
              component="h3"
            >
              Contact Us.
            </Typography>

            <Stack gap={2} my="16px">
              <Stack direction="row" gap={1} alignItems="center">
                <LocationOnIcon />
                <Typography
                  component="p"
                  sx={{
                    fontSize: "13px",
                    textAlign: "left",
                  }}
                >
                  5181 W Charleston Blvd #120, Las Vegas, NV 89146، USA
                </Typography>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <EmailIcon />
                <Typography
                  component="p"
                  sx={{
                    fontSize: "13px",
                    textAlign: "left",
                  }}
                >
                  mernstore@shop.net
                </Typography>
              </Stack>

              <img
                src={payment}
                alt="payment"
                style={{
                  width: "180px",
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
