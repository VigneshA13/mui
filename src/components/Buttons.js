import React from "react";
import {
  Stack,
  Button,
  Typography,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Buttons = () => {
  return (
    <Stack spacing={4}>
      <Typography variant="h6" gutterBottom>
        Button Types
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Typography variant="h6" gutterBottom>
        Button Colors
      </Typography>

      <Stack spacing={3} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
      </Stack>

      <Stack spacing={3} direction="row">
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
      </Stack>

      <Stack spacing={3} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
      </Stack>

      <Typography variant="h5">Button Types</Typography>
      <Stack display="block" spacing={3} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={3} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>

        {/* Button with Image only */}
        <IconButton aria-label="send" color="primary" size="medium">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* Button Group */}
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="medium"
          color="success">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Buttons;
