import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MyContext } from "./MyContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Edituser = () => {
  const { users, setUsers } = useContext(MyContext);
  const { id } = useParams(); // getting the object id (user's employee id)
  const user = users.find((item) => item.empId == id); // retrieving the employee by the employee's employee id
  const [currentUser, setCurrentUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    empId: user.empId,
    city: user.city,
  });
  const navigate = useNavigate();

  const editHandler = () => {
    let index = users.findIndex((item) => item.empId == id); // getting the index of the object that's being edited
    var temp = [...users]; // defining a temp array clone of the users array
    temp[index] = currentUser; // changing/replacing the old object by the new edited object in the clone array
    setUsers(temp); // since the clone array (temp) consists the updated object setting the users array to the clone array (temp)
    navigate("/"); // navigate to homepage
  };

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
          id="outlined-required"
          label="First Name"
          value={currentUser.firstName}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, firstName: e.target.value })
          }
        />
        <TextField
          id="outlined-required"
          label="Last Name"
          value={currentUser.lastName}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, lastName: e.target.value })
          }
        />
        <TextField
          id="outlined-required"
          label="Employee ID"
          value={currentUser.empId}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, empId: e.target.value })
          }
        />
        <TextField
          id="outlined-required"
          label="City"
          value={currentUser.city}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, city: e.target.value })
          }
        />
      </div>
      <Button onClick={editHandler}>Edit</Button>
    </Box>
  );
};

export default Edituser;
