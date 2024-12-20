import React from "react";
import { Button, Box } from "@mui/material";

const MemberRegistrationButton = ({click}) => {
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="flex-end" mt={2}>
      <Button className="bg-orange-600" onClick={click} variant="contained">Member Registration</Button>
    </Box>
  );
};

export default MemberRegistrationButton;
