import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import imgPath from '../../images/login.svg';
import cls from './Login.module.css';

const Login = () => {
    const [inpValue, setInpValue] = useState({
        email: '',
        password: ''
    });
    const { email, password } = inpValue;
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const history = useHistory();
    const { login } = useAuth();

    function handler(e) {
        const { name } = e.target;
        const val = e.target.value;
        return setInpValue({
            ...inpValue,
            [name]: val
        });
    }

    async function submitHandler(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push('/');
        } catch (err) {
            console.log('error occured');
            setLoading(false);
            setError(`username or password not correct`);
        }
    }

    return (
        <>
            <div className={cls.container}>
                <h1>log in to your Account</h1>

                <div className={cls.signup_container}>
                    <div className={cls.leftside}>
                        <img className={cls.img} src={imgPath} alt="signup" />
                    </div>

                    <div className={cls.rightside}>
                        <form onSubmit={submitHandler}>
                            <div className={cls.seticon}>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    value={inpValue.email}
                                    name="email"
                                    onChange={(e) => handler(e)}
                                    required
                                />
                                <span>
                                    <AlternateEmailIcon />
                                </span>
                                <br /> <br />
                            </div>
                            <div className={cls.seticon}>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    value={inpValue.password}
                                    name="password"
                                    onChange={(e) => handler(e)}
                                    required
                                />
                                <span>
                                    <LockOpenIcon />
                                </span>
                                <br /> <br />
                            </div>
                            {error && <p className="error"> {error} </p>}

                            <button disabled={loading} className={cls.btn} type="submit">
                                SUBMIT NOW
                            </button>
                        </form>
                        <div className={cls.footer}>
                            <p>
                                Already have an account? <a href="#/">Sign up</a> instead
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
