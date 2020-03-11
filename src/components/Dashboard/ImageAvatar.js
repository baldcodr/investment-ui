import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flexbox",
    "& > *": {
      margin: theme.spacing(5)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  avatarStyle: {
    paddingTop: "-20px",
    marginTop: "-30px"
  }
}));

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Fred Adebayo"
        src="https://apel.com.ng/wp-content/uploads/2019/04/victor.png"
        className={classes.large}
      />
      <div className={classes.avatarStyle}>Victor Omiyedun</div>
    </div>
  );
}
