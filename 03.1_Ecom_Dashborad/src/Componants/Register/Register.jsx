import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_Number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  //If a user is loged in then cann't visit this page
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })



  //API call for register user
  const registeruser = async () => {
    let result = {}
    try {
        result = await fetch("http://localhost:5000/register", {
        //call API
        method: "post",
        body: JSON.stringify({ name, email, contact_Number, password }),
        headers: { "Content-Type": "application/json" },
      });
      result = await result.json();

      //if data sent to database then user will navigated to the home 
     if(result.auth){
      localStorage.setItem('user',JSON.stringify(result.user))  //local stoare data keep info of userin brouser.
      localStorage.setItem('auth',JSON.stringify(result.auth))  //local stoare data keep info of userin brouser.
      console.log(result);
      navigate('/')
    }
      
    } catch (err) {
      console.log(err);
    }

    
  };

  return (
    <form
      className=" "
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        registeruser();
      }}
    >
      <div className=" flex items-center flex-col justify-center">
        <div className=" flex flex-col w-1/5 m-10 mt-28 ">
          <h1 className="text-center  text-3xl mb-5">Sign Up</h1>
          <input
            type="text"
            placeholder="Your Name"
            className=" focus:border-[2px] rounded-lg px-4 h-10 focus:border-green-500 outline-none my-1.5 border-[1px] border-gray-300 text-center"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Your email"
            className=" focus:border-[2px] rounded-lg px-3 h-10 focus:border-green-500 outline-none my-1.5 border-[1px] border-gray-300 text-center"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Your Mobile number"
            className=" focus:border-[2px] rounded-lg px-3 h-10 focus:border-green-400 outline-none my-1.5 border-[1px] border-gray-300 text-center"
            value={contact_Number}
            required
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Create password"
            className=" focus:border-[2px] rounded-lg px-3 h-10 focus:border-green-400 outline-none my-1.5 border-[1px] border-gray-300 text-center"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="mb-9 ">
          <button
            typeof="submit"
            className=" bg-green-500 px-5 py-2 rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
