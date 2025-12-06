import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser(){
    const Dispatcher = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const values = useSelector(data => data.Users);
    const Details = values.find(u => u.id === +id);
    const [newForm,setNewForm] = useState({Fullname:"",email:""});
    useEffect(() => {
        if(Details){
        setNewForm({
            Fullname:Details.Fullname,
            email:Details.email
        })
    }
    },[Details])
    
    const newInformation = (e) => {
        setNewForm(state => {
            return {
                ...state,
                [e.target.id] : e.target.value 
            }
        })
    }
    const Update = (e) => {
        e.preventDefault();
        Dispatcher(
            {
                type:'UPDATE_USER',
                payload: {id:id,Fullname:newForm.Fullname,email:newForm.email}
            }
        )
        navigate('/')
    }
    return(
    <form>
        <label>Fullname</label>
        <input type="text" id="Fullname" value={newForm.Fullname} onChange={newInformation}/>
        <label>Email</label>
        <input type="email" id="email" value={newForm.email} onChange={newInformation}/>
        <button onClick={Update}>Update</button>
    </form>)
}
export default UpdateUser;