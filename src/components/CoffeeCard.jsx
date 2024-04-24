/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffees, coffee, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-two-beta.vercel.app/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Coffee Deleted Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    };
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between pr-4 w-full">
                <div>
                    <h2 className="card-title">Name : {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn join-item">view</button>
                        <Link to={`/update-coffee/${_id}`}>
                            <button className="btn join-item">edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CoffeeCard;