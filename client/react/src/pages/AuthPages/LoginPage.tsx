import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from 'src/forms/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.users.token);

  useEffect(() => {
    console.log('token: ', token);
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  return (
    <div data-testid='login-page'>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
