import React, { useState } from "react";
import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductDetails = ({  image, title, price,  description }) => {
  const [count, setCount] = useState(1);
  return (
    <Stack
      direction={{
        md: "row",
      }}
      gap={{
        md: 12,
        xs: 6,
      }}
      alignItems={{
        xs: "center",
        md: "start",
      }}
    >
      <img src={image} alt={title} style={{ height: "250px" }} />
      <Stack
        sx={{
          maxWidth: "370px",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: "26px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "20px",
            my: "10px",
          }}
        >
          ${price}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "20px",
            my: "10px",
          }}
        >
          {description?.slice(0, 100)}
        </Typography>
        <Stack direction="row" gap={1} mt="20px">
          <ButtonGroup
            color="secondary"
            variant="outlined"
            aria-label="outlined button group"
          >
            <Button
              onClick={() =>
                setCount((prev) => {
                  return prev > 1 ? prev - 1 : 1;
                })
              }
              sx={{
                borderRadius: 0,
              }}
            >
              -
            </Button>
            <Button
              sx={{
                cursor: "default",
              }}
              disableRipple
            >
              {count}
            </Button>
            <Button
              sx={{
                borderRadius: 0,
              }}
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </ButtonGroup>
          <Button
            sx={{
              borderRadius: 0,
            }}
            color="secondary"
            variant="contained"
            endIcon={<ShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
