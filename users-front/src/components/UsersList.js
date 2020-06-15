import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Users from './Users'
import PrivateRoutes from './PrivateRoutes';
import {axiosWithAuth} from '../utils/AxiosWithAuth'

const UsersList = () => {

    
    const [user, setUser] = useState([])
    useEffect(() => {
        axiosWithAuth().get('http://localhost:9876/api/users', null, {params: {token: "bearer " + localStorage.getItem("token")}})
        .then(res => {
            setUser(res.data)
            console.log("res", res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    console.log(user)
    console.log("poweruser", typeof(user))
    // return (<div>things</div>)
    if (user.length === 0) {
        return (<div>loading...</div>)
    } else {
        return (
            <div>
            { Object.entries(user).map((data, index) => {
                return <Users data={data} key={index}/>
            })}
            jokess
            </div>
            
        )
    }
    
 
}

export default UsersList
   // else {
    // return (
    //     <div>
    //         {user.map((data, index) => {
    //             return <Users data={data} key={index} />;
    //         })}
    //     </div>
    // )}