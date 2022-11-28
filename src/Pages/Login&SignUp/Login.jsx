import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn, setLoading, providerLogin, loading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    // useSetTitle("Login");
    if (loading) {
        return <div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
    }

    const googleProvider = new GoogleAuthProvider();

    const GoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user

                saveUser(user.displayName, user.email)
                console.log(user);
                if (user.uid) {
                    navigate(from, { replace: true })
                } else {
                    toast.error('your email is not verified')
                }
            })
            .catch(err => console.error(err))
            .finally(() => {
                setLoading(false)
            })
    }

    //social login make buyer

    const saveUser = (name, email) => {
        const user = { name, email, role: "buyer", verify: 'false' };
        fetch('https://watch-bazar-server.vercel.app/users', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }



    const from = location.state?.from?.pathname || '/';


    const handlerSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(res => {
                const user = res.user;
                form.reset()
                setError('')
                if (user.uid) {
                    navigate(from, { replace: true })
                } else {
                    toast.error('your email is not vaild')
                }
            })
            .catch(err => {
                console.error(err)
                //dual error message showed
                setError(err.message)
                toast.error(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div>
            <section className='mb-3'>
                <div className="dark:bg-gray-900">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center  md:py-12 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-orange-500">Login Page</h1>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 70 1440 200"><path fill="#111827" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,85.3C672,75,768,117,864,117.3C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </section>
            <section className='mb-20 lg:-mt-8 md:mt-5 mx-5'>
                <div>
                    <div className="w-full max-w-md  mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                        <h2 className="mb-6 text-3xl text-orange-500 font-semibold text-center">Login to your account</h2>
                        <form onSubmit={handlerSignIn} className="space-y-8 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="block text-orange-500 text-sm text-left">Email address</label>
                                    <input type="email" name="email" placeholder="Email Address" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label className="text-sm text-orange-500">Password</label>
                                    </div>
                                    <input type="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                </div>
                            </div>
                            <button type="submit" className="w-full px-8 py-3 font-bold rounded-md dark:bg-orange-400 dark:text-gray-900">Sign in</button>
                        </form>
                        <p className="text-sm text-center my-5 dark:text-gray-400">Dont have account?
                            <Link to='/signup' rel="noopener noreferrer" className="focus:underline hover:underline font-bold text-orange-500"> Sign up here</Link>
                        </p>

                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-orange-300" />
                            <p className="px-3 font-bold dark:text-orange-500">OR</p>
                            <hr className="w-full dark:text-orange-300" />
                        </div>


                        <div className="my-6 space-y-4">
                            <button onClick={GoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-orange-500 focus:ring-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-orange-500">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p className='text-orange-500'>Login with Google</p>
                            </button>
                        </div>
                    </div>
                    <p className='text-red-600'>{error}</p>
                </div>

            </section>
        </div>
    );
};

export default Login;