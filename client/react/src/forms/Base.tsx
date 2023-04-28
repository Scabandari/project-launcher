import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

interface BaseProps {
  children: React.ReactNode;
}

export const FlexBetweenTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AlignParagraphFlexStart = styled.p`
  align-self: flex-start;
`;

const StyledPaper = styled(Paper)`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 2rem;
  @media only screen and (max-width: 600px) {
    margin: 1rem 0rem 1rem 0rem;
  }
`;

const Base = ({ children }: BaseProps) => (
  <StyledPaper elevation={3}>{children} </StyledPaper>
);

export default Base;
