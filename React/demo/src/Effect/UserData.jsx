import React, { useEffect, useState } from 'react'

function UserData() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                // console.log(res)
                setdata(res)
            })
    }

    return (
        <div>
            <h1>Hello user</h1>
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

export default UserData
