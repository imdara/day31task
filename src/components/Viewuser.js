import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MyContext } from "./MyContext";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

const Viewuser = () => {
  const { users } = useContext(MyContext);
  const { id } = useParams();
  const user = users.find((item) => item.empId == id);
  const navigate = useNavigate();
  return (
    <TableContainer className="viewuser">
      <Table className="text-center">
        <TableRow>
          <TableCell>First Name: </TableCell>
          <TableCell>{user.firstName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Last Name: </TableCell>
          <TableCell>{user.lastName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>EmpID: </TableCell>
          <TableCell>{user.empId}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>City: </TableCell>
          <TableCell>{user.city}</TableCell>
        </TableRow>
      </Table>
      <Button align="center" onClick={() => navigate("/")}>
        Back
      </Button>
    </TableContainer>
  );
};

export default Viewuser;
