import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: 'LOGOUT' });
    toast.success('You have been logged out');
    navigate('/login');
  }, []);

  return null;
};

export default Logout;
