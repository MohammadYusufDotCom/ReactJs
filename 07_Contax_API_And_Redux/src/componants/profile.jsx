import React, {useContext} from 'react'
import Context from '../contex/contex';

function Profile() {
    const {user} = useContext(Context)

    if (!user) return <div>Please loagin</div>
  
    return (
    <div>Weclome  {user.userName}</div>
  );
}

export default Profile