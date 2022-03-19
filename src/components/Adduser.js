import * as React from "react";
import { MyContext } from "./MyContext"; // Importing MyContext Component
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

export default function FormPropsTextFields() {
  const {
    setFirstName,
    firstName,
    setLastName,
    lastName,
    setEmpId,
    empId,
    setCity,
    city,
    addUserHandler,
  } = React.useContext(MyContext);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          onChange={(e) => setFirstName(e.target.value)}
          id="outlined-required"
          label="First Name"
          value={firstName}
        />
        <TextField
          onChange={(e) => setLastName(e.target.value)}
          id="outlined-required"
          label="Last Name"
          value={lastName}
        />
        <TextField
          onChange={(e) => setEmpId(e.target.value)}
          id="outlined-required"
          label="Employee ID"
          value={empId}
        />
        <TextField
          onChange={(e) => setCity(e.target.value)}
          id="outlined-required"
          label="City"
          value={city}
        />
      </div>
      <Button
        onClick={addUserHandler}
        variant="contained"
        endIcon={<AddIcon />}
      >
        Add
      </Button>
    </Box>
  );
}
