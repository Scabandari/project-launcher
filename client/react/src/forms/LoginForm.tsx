import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { secondary, secondaryHover } from 'src/styles/constants';
import { loginUserRequest, guestLogin } from 'src/store/actions/userActions';
import Base, { AlignParagraphFlexStart, FlexBetweenTitleRow } from './Base';
import { useSelector } from 'react-redux';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const StyledTextField = styled(TextField)`
  margin: 0.5rem 0;
`;

const StyledButton = styled(Button)`
  background-color: ${secondary};
  &:hover {
    background-color: ${secondaryHover};
  }
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLoginLoading = useSelector(
    (state: any) => state.users.login.loading
  );

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password }) => {
      console.log('submitting');
      dispatch(loginUserRequest({ email, password, navigate }));
    },
  });

  return (
    <Base>
      <form onSubmit={formik.handleSubmit}>
        <FlexBetweenTitleRow>
          <h2>Login</h2>{' '}
          <AlignParagraphFlexStart>
            <Link to='/register'>Register</Link> or{' '}
            <Link
              onClick={() => dispatch(guestLogin({ navigate }))}
              to='/login'
            >
              Guest Login
            </Link>
          </AlignParagraphFlexStart>
        </FlexBetweenTitleRow>
        <StyledTextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <StyledTextField
          fullWidth
          id='password'
          name='password'
          label='Password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <StyledButton
          disabled={userLoginLoading}
          variant='contained'
          fullWidth
          type='submit'
        >
          Submit
        </StyledButton>
      </form>
    </Base>
  );
};

export default LoginForm;
