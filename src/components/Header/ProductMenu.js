import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Tabs } from "@material-ui/core";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Treasury Bills</MenuItem>
            <MenuItem onClick={popupState.close}>AIN</MenuItem>
            <MenuItem onClick={popupState.close}>Fed. Govt. Bonds</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
