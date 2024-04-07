import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent={"end"} p={2}>
      <Box display="flex" marginRight={"20px"}>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="50px"
            height="50px"
            src={`../../assets/user.png`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
