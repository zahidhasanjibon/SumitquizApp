import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import imgsrc from '../../images/logo.png';
import cls from './Navbar.module.css';

const Navbar = () => {
    const { currentUser, logout } = useAuth();

    return (
        <>
            <div className={cls.navbar}>
                <div className={cls.logo}>
                    <NavLink to="/">
                        <img className={cls.img} src={imgsrc} alt="logo" />
                    </NavLink>
                    <h4>Learn from Quiz</h4>
                </div>

                {currentUser ? (
                    <div className={cls.user}>
                        <span>
                            <i className="fas fa-user-check" />
                        </span>
                        <span style={{ padding: '0 10px' }}>{currentUser.displayName}</span>
                        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                        <span
                            id="logout"
                            className="material-icons"
                            title="Logout"
                            onClick={logout}
                        >
                            logout
                        </span>
                    </div>
                ) : (
                    <div className={cls.user}>
                        <AccountCircleIcon />
                        <h5>
                            <NavLink to="/login">Log in</NavLink>
                        </h5>
                        <h5>
                            <NavLink to="/signup">Sign up</NavLink>
                        </h5>
                    </div>
                )}
            </div>
        </>
    );
};
export default Navbar;
