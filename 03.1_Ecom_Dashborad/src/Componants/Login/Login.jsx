import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [status, setStatus] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user')
     if (auth){
        navigate('/')
     }
  })


  let login = async () => {
    try {
      let result = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      result.json().then((resp) => {
        if (resp.status) {
          console.log(resp.status);
          setStatus("Invalid username or Password");
        } else {
          localStorage.setItem("user", JSON.stringify(resp));
          setStatus("");
          console.log(resp);
          navigate("/");
        }
      });
    } catch (err) {
      console.log("catch");
    }
  };

  return (
    <form
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
    >
      <div className="  flex items-center flex-col justify-center">
        <div className="text-2xl text-red-500">{status} </div>
        <div className="flex flex-col w-1/5 m-10 mt-28 ">
          <h1 className="text-center  text-3xl mb-5">Sign In</h1>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" focus:border-[2px] rounded-lg px-4 h-10 focus:border-green-500 outline-none my-1.5 border-[1px] border-gray-300 text-center"
          />

          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className=" focus:border-[2px] rounded-lg px-4 h-10 focus:border-green-500 outline-none my-1.5 border-[1px] border-gray-300 text-center"
          />
        </div>
        <button type="submit" className=" bg-green-500 px-5 py-2 rounded-xl">
          Log in
        </button>
      </div>
    </form>
  );
}

export default Login;
