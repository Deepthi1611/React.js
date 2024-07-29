import React, {useContext} from 'react'
import userContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(userContext)
    if(!user) return <div>Please login!</div>
    else return <div>Welcome {user.userName}</div>
}

export default Profile