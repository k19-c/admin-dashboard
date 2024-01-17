import { Box } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';
import TagIcon from '@mui/icons-material/Tag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StatBox from "../../components/StatBox";

const Dashboard = () => {

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
    </Box>
  );
};

export default Dashboard;
