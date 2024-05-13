import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form(){

    const[data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        confirm: false
    });

    const[error, setError] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        confirm: ""
    });

    const navigate = useNavigate();

    function validatePhone(phone){
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }

    function validate(){

        let isError = false;
        setError((error) => {
            return{
                name: "",
                username: "",
                email: "",
                phone: "",
                confirm: ""
            }
        });

        if(data.name.trim().length === 0){
            console.warn("Name is required!");
            setError({...error, name: "Name is required!"});
            isError = true;
        }

        if(data.username.trim().length === 0){
            console.warn("Username is required!");
            setError(
                (error) => {return {...error, username: "Username is required!"}}
            );
            isError = true;
        }

        if(data.email.trim().length === 0){
            console.warn("Email is required!");
            setError(
                (error) => {return {...error, email: "Email is required!"}}
            );
            isError = true;
        }

        if(data.phone.trim().length === 0 || !validatePhone(data.phone)){
            console.warn("Mobile number is empty or invalid!");
            setError(
                (error) => {return {...error, phone: "Mobile number is empty or invalid!"}}
            );
            isError = true;
        }

        if(!data.confirm){
            console.warn("Confirmation required!");
            setError(
                (error) => {return {...error, confirm: "Confirmation required!"}}
            );
            isError = true;
        }

        if(!isError){
            navigate("/movies");
        }
    }

    return(
        <form onSubmit={(e) => {e.preventDefault(); validate()}}
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "300px",
            margin: "0 auto"
        }}>
            <input type="text" name="" id="" placeholder="Name" value={data.name} 
            onChange={(e) => setData({...data, name: e.target.value})} />
            <span style={{color: "red"}}>{error.name}</span>

            <input type="text" name="" id="" placeholder="UserName" value={data.username} 
            onChange={(e) => setData({...data, username: e.target.value})} />
            <span style={{color: "red"}}>{error.username}</span>

            <input type="email" name="" id="" placeholder="Email" value={data.email}
            onChange={(e) => setData({...data, email: e.target.value})} />
            <span style={{color: "red"}}>{error.email}</span>

            <input type="tel" name="" id="" placeholder="Mobile" value={data.phone}
            onChange={(e) => setData({...data, phone: e.target.value})} />
            <span style={{color: "red"}}>{error.phone}</span>

            <label htmlFor="confirmCheckBox">
                <input type="checkbox" name="" id="confirmCheckBox" checked={data.confirm}
                onChange={(e) => setData({...data, confirm: e.target.checked})} />
                Share my registration data with Superapp
            </label>  
            <span style={{color: "red"}}>{error.confirm}</span>
            <button type="submit">SIGN UP</button>   
        </form>
    );
}

export default Form;