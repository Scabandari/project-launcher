import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RegisterForm } from 'src/forms';

const RegisterPage = () => {
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.users.token);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  return (
    <div data-testid='login-page'>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
