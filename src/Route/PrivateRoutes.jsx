import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Loading from '../Component/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user ,loading} = useContext(AuthContext);
    if (user && user.uid) {
        return children;
    }
    if (loading) {
        return <Loading></Loading>
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;