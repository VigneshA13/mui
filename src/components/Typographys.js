import React from "react";
import { Typography } from "@mui/material";

const Typographys = () => {
  return (
    <div>
      <Typography variant="h1">Helooo...</Typography>
      <Typography variant="h2">Helooo...</Typography>
      <Typography variant="h3">Helooo...</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        Helooo...
      </Typography>
      <Typography variant="h5">Helooo...</Typography>
      <Typography variant="h6">Helooo...</Typography>

      <Typography variant="subtitle1">Helooo...subtitle1</Typography>
      <Typography variant="subtitle2">Helooo...subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
        voluptatibus deserunt harum consequatur consequuntur illo suscipit
        tempore saepe? Sunt ipsa non dolorum. Minus vitae nisi iste molestias
        aperiam. Excepturi, quisquam.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa
        ipsa blanditiis et mollitia est quibusdam, nostrum obcaecati qui enim
        facilis quod cum totam, asperiores nisi quas hic quaerat aut.
      </Typography>
    </div>
  );
};

export default Typographys;
