import { useDispatch, useSelector } from "react-redux";
import {Routes,Route, Link} from 'react-router-dom';
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
function App() {
  const Afficher = useSelector(data => data.Users);
  const Dispatcher = useDispatch();
  return(
      <>
      <h1>Liste of Users</h1>
      
        <Routes>
          <Route path="/AddUser" element={<AddUser />}></Route>
          <Route path="/UpdateUser/:id" element={<UpdateUser />}></Route>
        </Routes>
      <Link to="/AddUser">
        <button>Add Users</button>
      </Link>
      <table border={1}>
        <thead>
          <td>Id</td>
          <td>Full name</td>
          <td>Email</td>
          <td>Actions</td>
        </thead>
        <tbody>
        {Afficher.map((user,key) => {
          return (
          <tr key={key}>
              <td>{user.id}</td>
              <td>{user.Fullname}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/UpdateUser/${user.id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => Dispatcher({
                  type:'DELETE_USER',
                  payload: user.id
                })}>Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody >
      </table>
      </>
  )
}
export default App;
