import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "./Sidebar.css";

const Sidebar=() => {
  return (
  
    <div className="sidebar">
        <img 
          style={{ width: "150px", position: "relative", bottom: "28px", right: "29px"}} 
          alt="Logo" 
          src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-6.png" 
        />
        <Link to="/">
          <HomeOutlinedIcon />
          Dashboard
        </Link>
        <Link to="/team">
          <PeopleOutlinedIcon />
          Add Candidate
        </Link>
        <Link to="/assignment">
          <ContactsOutlinedIcon />
          Assignment Dashboard
        </Link>
        <Link to="/sheet">
          <ReceiptOutlinedIcon />
          My Time Sheet
        </Link>
        <Link to="/approved">
          <PersonOutlinedIcon />
          Approved Timesheet
        </Link>
        <Link to="/hrms">
          <CalendarTodayOutlinedIcon />
          Login to HRMS
        </Link>
        <div style={{ position: "relative", top: "280px" }}>
          <Link to="/hrms">
            <ExitToAppIcon />
            SignOut
          </Link>
        </div>
    </div>
  );
};

export default Sidebar;