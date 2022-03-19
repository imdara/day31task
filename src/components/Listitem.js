import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./MyContext";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Listitem({ user, count }) {
  const { users, setUsers } = useContext(MyContext);
  const deleteItemHandler = () => {
    setUsers(users.filter((ele) => ele.empId !== user.empId)); // filtering out the element of the array so it wont be rendered
  };
  return (
    <tr key={count} className="text-center">
      <td>{count}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.empId}</td>
      <td>{user.city}</td>
      <td>
        <Link to={`/View/${user.empId}`}>
          <PreviewIcon style={{ marginRight: "7px" }} />
        </Link>
        <Link to={`/Edit/${user.empId}`}>
          <EditIcon />
        </Link>
        <IconButton onClick={deleteItemHandler} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  );
}
