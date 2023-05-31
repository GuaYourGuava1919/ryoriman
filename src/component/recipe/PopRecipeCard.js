import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Typography } from "@mui/material";

function PopRecipeCard() {
  return (
    <div className="popRecipeCard">
      <Card sx={{ boxShadow: "none" }}>
        <CardMedia
          component="img"
          height="160"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardHeader
          title="西班牙鮮蝦香腸海鮮燉飯"
          subheader="2023/05/26 由珍珍發佈"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="like">
            <FavoriteIcon />
            <Typography>100 人</Typography>
          </IconButton>
          <IconButton aria-label="collect">
            <BookmarkBorderIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default PopRecipeCard;
