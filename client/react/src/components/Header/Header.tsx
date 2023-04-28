import { Dispatch, SetStateAction } from 'react';
import { FaHome } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { MdHelpCenter, MdInfo, MdLogout } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { useWindowSize } from '../../hooks';

import {
  primary,
  fitPageContentMediaQuery,
  smallDeviceSize,
} from '../../styles/constants';
import { logout } from 'src/store/actions/userActions';

const NavBackground = styled.div`
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: center;
  background-color: ${primary};
`;

const Nav = styled.div`
  box-sizing: border-box;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${primary};
  width: 100%;
  ${fitPageContentMediaQuery}
`;

const Icon = styled.div`
  color: black;
  padding: 5px;
  &:hover {
    color: #333;
  }
`;

const RightButtonGroup = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;

const Header = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { width } = useWindowSize();
  const location = useLocation();
  const dispatch = useDispatch();

  const renderRightButtonGroup = () => {
    if (width && width > smallDeviceSize) {
      return (
        <RightButtonGroup>
          <Link to='/help'>
            <Icon>
              <MdHelpCenter size='2rem' />
            </Icon>
          </Link>

          <Link to='/about'>
            <Icon>
              <MdInfo style={{ marginLeft: '0.5rem' }} size='2rem' />
            </Icon>
          </Link>
          <Link onClick={() => dispatch(logout())} to='/login'>
            <Icon>
              <MdLogout style={{ marginLeft: '0.5rem' }} size='2rem' />
            </Icon>
          </Link>
        </RightButtonGroup>
      );
    }

    return (
      <RightButtonGroup>
        <Icon>
          <GiHamburgerMenu
            onClick={() => setIsOpen((prevState) => !prevState)}
            size='2rem'
          />
        </Icon>
      </RightButtonGroup>
    );
  };

  return (
    <NavBackground data-testid='header'>
      <Nav>
        <Link to='/'>
          <Icon style={{ marginLeft: '0.5rem' }}>
            <FaHome size='2rem' />
          </Icon>
        </Link>
        {!['/login', '/register'].includes(location.pathname) &&
          renderRightButtonGroup()}
      </Nav>
    </NavBackground>
  );
};

export default Header;
