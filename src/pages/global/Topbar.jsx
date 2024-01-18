import { Box, IconButton, Typography } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
 

  return (
    <Box display="flex" justifyContent="space-between" p={1} position="relative" bottom="7px" boxShadow= "2px 0px 5px rgba(0, 0, 0, 0.5)">
       <h3 style={{marginLeft: "16px"}}>Approved Timesheet</h3>
      <Box>
        <IconButton style={{ marginRight: "150px"}}>
          <PersonOutlinedIcon />
          <div style={{marginLeft: "5px"}}>
          <Typography style={{fontSize: "12px"}}>
             Good Morning
          </Typography>
            <Typography style={{ fontSize: "12px" }}>
             John Doe
          </Typography>
          </div>
        </IconButton>
        <IconButton style={{ marginRight: "26px"}}>
          <NotificationsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
