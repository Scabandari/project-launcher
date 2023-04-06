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
`;

const Base = ({ children }: BaseProps) => (
  <StyledPaper elevation={3}>{children} </StyledPaper>
);

export default Base;
