import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

const Categorie = () => {
  let { categorieId } = useParams();

  return (
    <Box
      sx={{
        height: "calc(100vh - 205px)",
        p: "100px 16px 30px",
        color: "#000",
        display: "flex",
        // alignItems: "top",
        justifyContent: "center",
      }}
    >
      Categorie
    </Box>
  );
};

export default Categorie;
