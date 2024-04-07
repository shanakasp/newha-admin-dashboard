import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      // backgroundColor={colors.primary[400]}
    >
      <Box display="flex" borderRadius="3px">
        <Typography
          variant="h2"
          color={colors.grey[500]}
          fontWeight="bold"
          sx={{ m: "10px " }}
        >
          Project Management System
        </Typography>
      </Box>

      <Box display="flex" sx={{ marginRight: "20px" }}>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="50px"
            height="50px"
            src={`../../assets/user.png`}
            style={{ cursor: "pointer", borderRadius: "20%" }}
          />
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default Topbar;
