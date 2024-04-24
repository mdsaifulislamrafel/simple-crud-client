import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                console.log(result.user);

                // new user has been created
                const createAt = result.user?.metadata?.creationTime
                const user = { email, password, createAt };
                fetch('https://coffee-store-server-two-beta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User Created Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
            })
            .catch((error) => {
                console.log(error.message);
            });

    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="space-y-5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;