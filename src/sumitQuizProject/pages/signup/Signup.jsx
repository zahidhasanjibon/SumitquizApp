import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import imgPath from '../../images/signup.svg';
import cls from './Signup.module.css';

const Signup = () => {
    const [inpValue, setInpValue] = useState({
        userName: '',
        email: '',
        password: '',
        confPassword: '',
        checkbox: false
    });
    const { userName, email, password, confPassword } = inpValue;
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const history = useHistory();
    const { signup } = useAuth();

    function handler(e) {
        const { name } = e.target;
        const val = e.target.value;
        if (name === 'checkbox') {
            return setInpValue({
                ...inpValue,
                checkbox: !inpValue.checkbox
            });
        }
        return setInpValue({
            ...inpValue,
            [name]: val
        });
    }

    // eslint-disable-next-line consistent-return
    async function submitHandler(e) {
        e.preventDefault();

        if (password !== confPassword) {
            return setError(`password don't match`);
        }
        try {
            setError('');
            setLoading(true);
            await signup(email, password, userName);
            history.push('/');
        } catch (err) {
            console.log('error occured');
            setLoading(false);
            setError(`failer to create an account`);
        }
    }

    return (
        <>
            <div className={cls.container}>
                <h1>Create an Account</h1>

                <div className={cls.signup_container}>
                    <div className={cls.leftside}>
                        <img className={cls.img} src={imgPath} alt="signup" />
                    </div>

                    <div className={cls.rightside}>
                        <form onSubmit={submitHandler}>
                            <div className={cls.seticon}>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    value={inpValue.userName}
                                    name="userName"
                                    onChange={(e) => handler(e)}
                                    required
                                />
                                <span>
                                    <PermIdentityIcon />
                                </span>
                                <br /> <br />
                            </div>
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
                            <div className={cls.seticon}>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={inpValue.confPassword}
                                    name="confPassword"
                                    onChange={(e) => handler(e)}
                                    required
                                />
                                <span>
                                    <NoEncryptionIcon />
                                </span>
                                <br /> <br />
                            </div>

                            <div>
                                <input
                                    type="checkbox"
                                    id="check"
                                    name="checkbox"
                                    checked={inpValue.checkbox}
                                    onChange={(e) => handler(e)}
                                    required
                                />
                                <label>I agree to the Terms and Condition</label> <br /> <br />
                            </div>
                            {error && <p className="error"> {error} </p>}
                            <button disabled={loading} className={cls.btn} type="submit">
                                SUBMIT NOW
                            </button>
                        </form>
                    </div>
                    <div className={cls.footer}>
                        <p>
                            Already have an account? <a href="#/">Login</a> instead
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Signup;
