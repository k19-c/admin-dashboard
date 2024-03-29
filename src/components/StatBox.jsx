import { Box, Typography } from "@mui/material";

const StatBox = ({ title, subtitle, icon  }) => {
  
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "black"}}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h6" sx={{ color: "black" }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
        >
          {icon}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
