import { Box, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const DropDown = () => {
  const [country, setCountry] = useState([]);
  const onchange = (event) => {
    let val = event.target.value;
    setCountry(typeof val === "string" ? val.split(",") : val);
  };
  console.log(country);
  return (
    // we can use size, helperText, error and color properties
    // single select
    <Stack>
      <Box width="250px">
        <TextField
          label="select country"
          fullWidth
          select
          value={country}
          onChange={onchange}>
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="india">India</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Russia">Russia</MenuItem>
        </TextField>
      </Box>

      {/* // multi select */}
      <Box width="250px" mt={5}>
        <TextField
          label="select country"
          fullWidth
          select
          value={country}
          onChange={onchange}
          SelectProps={{
            multiple: true,
          }}>
          <MenuItem value="india">India</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Russia">Russia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default DropDown;
