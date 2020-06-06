import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Users = (props) => {
    console.log("MAPPED DATA", props)
    return (
        <div>
            <h1>{props.data[1].username}</h1>
            <p>{props.data[1].department}</p>
        </div>
    )
}

export default Users
