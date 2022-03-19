import Listitem from "./Listitem";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import { Container, Table } from "react-bootstrap";

export default function Profile() {
  const { users } = useContext(MyContext);
  return (
    <Container className="profiles">
      <h1>User Profiles</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Sr. No.</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>EmpID</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <Listitem user={user} count={i + 1} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
