import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { secondary, secondaryHover } from 'src/styles/constants';
import { registerUserRequest } from 'src/store/actions/userActions';
import Base, { AlignParagraphFlexStart, FlexBetweenTitleRow } from './Base';

const validationSchema = yup.object({
  username: yup
    .string()
    .min(3, 'Username should be of minimum 3 characters length')
    .required('Username is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
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

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegisterLoading = useSelector(
    (state: any) => state.users.register.loading
  );

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ username, email, password }) => {
      console.log('submitting');
      dispatch(registerUserRequest({ username, email, password, navigate }));
    },
  });

  return (
    <Base>
      <form onSubmit={formik.handleSubmit}>
        <FlexBetweenTitleRow>
          <h2>Register</h2>{' '}
          <AlignParagraphFlexStart>
            or <Link to='/login'>Log In</Link>
          </AlignParagraphFlexStart>
        </FlexBetweenTitleRow>
        <StyledTextField
          autoFocus
          fullWidth
          id='username'
          name='username'
          label='Username'
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <StyledTextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputLabelProps={{ shrink: true }}
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
          InputLabelProps={{ shrink: true }}
        />
        <StyledTextField
          fullWidth
          id='confirmPassword'
          name='confirmPassword'
          label='Confirm Password'
          type='password'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <StyledButton
          disabled={userRegisterLoading}
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

export default RegisterForm;
