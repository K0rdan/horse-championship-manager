import React from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
//import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";

import styles from "./styles";

export const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          HCM
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
