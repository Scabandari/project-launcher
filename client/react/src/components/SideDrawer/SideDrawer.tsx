import styled from '@emotion/styled';
import { MdHelpCenter, MdInfo, MdLogout } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Dispatch, SetStateAction, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useNavigate } from 'react-router-dom';
import useWindowSize from 'src/hooks/useWindowSize';
import { smallDeviceSize } from 'src/styles/constants';

type StyledDivProps = {
  isOpen: boolean;
};

const StyledDiv = styled.div<StyledDivProps>`
  box-sizing: border-box;
  z-index: 100;
  background-color: #b22222;
  height: 100vh;
  transition: all 0.3s ease-out;
  border-left: ${(props) => (props.isOpen ? '2px solid black' : 'none')};
  width: ${(props) => (props.isOpen ? '7rem' : '0')};
`;

const Back = styled.div`
  padding-left: 1rem;
  box-sizing: border-box;
  height: 4rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-bottom: 2px solid black;
  &:hover {
    color: #333;
  }
`;

const StyledLink = styled.div`
  box-sizing: border-box;
  padding-left: 1rem;
  height: 3rem;
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  color: black;
  &:hover {
    color: #333;
  }
`;

const links = [
  { destination: '/help', icon: <MdHelpCenter size='2rem' /> },
  { destination: '/about', icon: <MdInfo size='2rem' /> },
  { destination: '/logout', icon: <MdLogout size='2rem' /> },
];

const SideDrawer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { width } = useWindowSize();
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = () => setIsOpen(false);

  useOnClickOutside(ref, handleClickOutside);

  return width && width > smallDeviceSize ? null : (
    <StyledDiv ref={ref} isOpen={isOpen}>
      <Back onClick={() => setIsOpen(false)}>
        <FaLongArrowAltRight size='3rem' />
      </Back>
      {links.map(({ destination, icon }) => (
        <StyledLink onClick={() => navigate(destination)} key={destination}>
          <Icon>{icon}</Icon>
        </StyledLink>
      ))}
    </StyledDiv>
  );
};

export default SideDrawer;
