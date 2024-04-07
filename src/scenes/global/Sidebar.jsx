import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
const darkPurple = "#590595"; // Dark purple color
const lightPurple = "#E279EF"; // Light purple color
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[900],
        position: "relative",
        marginBottom: "30px",
      }}
      onClick={() => setSelected(title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      icon={icon}
    >
      <Typography sx={{ fontSize: "1.1rem" }}>{title}</Typography>
      <Link to={to} />

      {isHovered && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "80%",
            borderRadius: "2%",
            height: "100%",
            backgroundColor: "rgba(178, 190, 181, 0.4);",
            zIndex: -1,
          }}
        />
      )}
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const gradientBackground = `linear-gradient(to bottom, ${darkPurple}, ${lightPurple})`;
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${gradientBackground} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        // "& .pro-inner-item:hover": {
        //   color: "#868dfb !important",
        // },
        // "& .pro-menu-item.active": {
        //   color: "#6870fa !important",
        // },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[900],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon
                    style={{
                      fontSize: "2rem",
                      marginLeft: "30%",
                      color: colors.grey[900],
                    }}
                  />
                </IconButton>

                <Box
                  justifyContent="center"
                  alignItems="center"
                  marginRight={"25%"}
                >
                  <img
                    alt="profile-user"
                    width="70px"
                    height="70px"
                    src={`../../assets/download.png`}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Company"
              to="/company"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Progress"
              to="/progress"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Timeline"
              to="/timeline"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/settings"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
