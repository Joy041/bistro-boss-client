import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useRef, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";


const Login = () => {
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(true)
    const emailRef = useRef();
    const { login, passwordReset } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const from = location.state?.from?.pathname || '/'

    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        setError('')

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset()
                console.log(loggedUser)
                navigate(from, { replace: true })

                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => setError(error.message))
    }


    const handleCaptchaValidation = (event) => {
        const captchaValue = event.target.value;

        if (validateCaptcha(captchaValue)) {
            setDisabled(false)
        }
        else {
            setError('Captcha not match')
        }
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value
        passwordReset(email)
            .then(() => {
                alert('Check your email')
                return
            })
            .catch(error => setError(error.message))

    }

   
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero py-16 bg-base-200 mt-6">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Please login your account for take our service and connect with us!!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLoginForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' ref={emailRef} required className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' required className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label mt-2">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input type="text" onBlur = {handleCaptchaValidation}  placeholder="Type the captcha above" name='captcha' required className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <p className='text-red-600'>{error}</p>
                                    <label className="label">
                                        <a href="#" onClick={handleForgetPass} className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <input type="submit" disabled={disabled} value="Login" className="btn btn-primary" />
                                </div>
                                <div className='form-control'>
                                    <p className='mt-3 text-center'>Do not Have An Account ? <Link to='/register' className='text-decoration-none text-primary'>Register</Link></p>
                                    <SocialLogin navigate={navigate} setError={setError} ></SocialLogin>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;