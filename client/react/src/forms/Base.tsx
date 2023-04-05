import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

interface BaseProps {
  children: React.ReactNode;
}

const StyledPaper = styled(Paper)`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 2rem;
`;

const Base = ({ children }: BaseProps) => (
  <StyledPaper elevation={3}>{children} </StyledPaper>
);

export default Base;
