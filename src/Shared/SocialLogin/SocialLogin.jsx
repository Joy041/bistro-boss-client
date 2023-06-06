import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleRegister = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })

                        Swal.fire({
                            title: 'Success!',
                            text: `Welcome to Bistro Boss Restaurant`,
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    })


            })
            .catch(error => console.log(error.message))
    }

    const handleGithubRegister = () => {
        githubLogin()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })

                        Swal.fire({
                            title: 'Success!',
                            text: `Welcome to Bistro Boss Restaurant`,
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    })
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="divider"></div>
            <button type="submit" onClick={handleGoogleRegister} className=' btn w-full bg-white text-black font-semibold'>
                <FaGoogle className='me-2'></FaGoogle> Register with Google
            </button>
            <button type="submit" onClick={handleGithubRegister} className='btn w-full bg-white text-black font-semibold mt-4'>
                <FaGithub className='me-2'></FaGithub> Register with Github
            </button>
        </div>
    );
};

export default SocialLogin;