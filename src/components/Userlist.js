import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import Userlistitem from "./Userlistitem";
import { MyContext } from "./MyContext";

export default function Profile() {
  const { users } = useContext(MyContext);
  return (
    <Container className="profiles">
      <h1>List of Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <td>Sr. No.</td>
            <td>User</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <Userlistitem user={user} count={i + 1} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
