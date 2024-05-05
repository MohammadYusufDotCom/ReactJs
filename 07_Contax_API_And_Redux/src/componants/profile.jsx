import React,{useContext} from 'react'
import contexProvider from '../contex/contexProvider'
import Context from '../contex/contex';

function Profile() {
    const {user} = useContext(Context)

    if (!user) return <div>Please provide username and password</div>
  
    return (
    <div>Weclome to the {user.userName}</div>
  );
}

export default Profile