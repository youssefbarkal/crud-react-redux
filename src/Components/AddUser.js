import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
function AddUser(){
    const [form,setForm] = useState({});
    const Length = useSelector(data => data.Users.length);
    const Dispatcher = useDispatch();
    const handleAdd = (e) => {
        setForm(state => {
            return {
                ...state,
                [e.target.id] : e.target.value
            }
        })
    }
    const Afficher = (e) => {
        e.preventDefault();
        Dispatcher({
            type:'ADD_USER',
            payload:{id:Length+1,Fullname:form.Fullname,email:form.email}
        })
    }
    return(
    <form>
        <label>Full Name</label>
        <input type="text" id="Fullname" onChange={handleAdd}/>
        <label>Email</label>
        <input type="email" id="email" onChange={handleAdd}/>
        <button onClick={Afficher}>Afficher</button>
    </form>)
}
export default AddUser;