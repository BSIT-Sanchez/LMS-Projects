import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const OnlyStudentPrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.role === 'student' ? <Outlet/> : <Navigate to='/'/>
}
export default OnlyStudentPrivateRoute