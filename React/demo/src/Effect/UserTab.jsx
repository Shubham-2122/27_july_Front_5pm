import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserTab() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(res.data)
            setdata(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#iD</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">city</th>
                        <th scope="col">Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default UserTab
