import {
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TextFields = () => {
  const [pass, setPass] = useState(false);
  return (
    <Stack spacing={4}>
      <Typography variant="h5">TextField Types</Typography>
      <Stack direction="row" spacing={3}>
        <TextField label="username" variant="outlined" />
        <TextField label="username" variant="filled" />
        <TextField label="username" variant="standard" />
      </Stack>

      <Typography variant="h5">TextField Size and Color</Typography>
      <Stack direction="row" spacing={3}>
        <TextField
          label="Small Secondary"
          variant="outlined"
          color="secondary"
          size="small"
        />
        <TextField
          label="Medium Error"
          variant="outlined"
          color="error"
          size="medium"
        />
        <TextField
          label="Large Warning"
          variant="outlined"
          color="warning"
          size="large"
        />
      </Stack>

      <Typography variant="h5">
        TextField Required Property and HelperText
      </Typography>
      <Stack direction="row" spacing={3}>
        <TextField label="name" variant="outlined" required name="name" />
        <TextField
          label="pasword"
          type="password"
          variant="outlined"
          helperText="Donot share your password"
        />
        <TextField
          label="disabled"
          type="password"
          variant="outlined"
          helperText="This field is disabled"
          disabled
        />
        <TextField
          label="Read-only"
          type="text"
          variant="outlined"
          helperText="This field is disabled"
          disabled
          value="Hello.."
          InputProps={{ readOnly: true }}
          color="secondary"
        />
      </Stack>

      <Typography variant="h5">Prefix and Sufix Texts</Typography>
      <Stack direction="row" spacing={3}>
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>

      <Typography variant="h5">Password</Typography>
      <Stack direction="row" spacing={3}>
        <TextField
          label="Password"
          type={pass ? "text" : "password"}
          error
          
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    if (pass) {
                      setPass(false);
                    } else {
                      setPass(true);
                    }
                  }}>
                  {pass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TextFields;
