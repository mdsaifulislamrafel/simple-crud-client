import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadingUser = useLoaderData();
    const [users, setUsers] = useState(loadingUser);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
             if (data.deletedCount > 0) {
                 const remaining = users.filter(user => user._id!== id)
                 setUsers(remaining)
             }
 
        })
        
    }
    return (
        <div>
            <h2>Users {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id} className="hover">
                                <th>{users.indexOf(user) + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.createAt}</td>
                                <td>{user.password}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td><button onClick={() => handleDelete(user._id)} className="btn">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;