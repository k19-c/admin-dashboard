import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';
import TagIcon from '@mui/icons-material/Tag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StatBox from "../../components/StatBox";
import { mockDataContacts } from "../../data/mockData";
import "./style.css"
import Candidate from "./Candidate";
const Dashboard=() => {

  const columns=[
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="65px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor="whitesmoke"
          boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="64"
            subtitle="Total"
            icon={
              <TagIcon
                sx={{ color: "red", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="whitesmoke"
          boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="64"
            subtitle="Pending"
            icon={
              <AccessTimeIcon
                sx={{ color: "orange", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="whitesmoke"
          boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="64"
            subtitle="Approved"
            icon={
              <CheckCircleOutlineIcon
                sx={{ color: "green", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="whitesmoke"
          boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="64"
            subtitle="Clarification Pending"
            icon={
              <PendingIcon
                sx={{ color: "blue" }}
              />
            }
          />
        </Box>
      </Box>
      <Box sx={{ height: 500, width: '96%', marginTop: "40px", display: "flex", boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.5)" }}>
        <input type="text" className="input-field" placeholder="Search Candidate" />
        <Candidate />
        <DataGrid
          style={{ marginLeft: "10px", width: "50%" }}
          rows={mockDataContacts}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
