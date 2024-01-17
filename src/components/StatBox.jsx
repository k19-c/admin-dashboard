import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, icon  }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "black"}}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: "black" }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {icon}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
