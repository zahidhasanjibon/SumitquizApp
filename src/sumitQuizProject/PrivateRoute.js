import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export default function privateRoute({ component: Component, ...rest }) {
    const b = { ...rest };
    console.log(b);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { currentUser } = useAuth();
    return currentUser ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Route {...rest}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {(props) => <Component {...props} />}
        </Route>
    ) : (
        <Redirect to="/login" />
    );
}
