import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function RecommendRecipeCard() {
  return (
    <div className="recommendRecipeCard">
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{}}>
            <Typography component="div" variant="h6">
              西班牙鮮蝦香腸海鮮燉飯
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              抹香鯨珍珍
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="food"
        />
      </Card>
    </div>
  );
}

export default RecommendRecipeCard;
