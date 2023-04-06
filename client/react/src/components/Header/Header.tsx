import { FaHome } from 'react-icons/fa';
import { MdHelpCenter, MdInfo, MdLogout } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from '@emotion/styled';

import { useWindowSize } from '../../hooks';

import {
  primary,
  offWhite,
  secondary,
  fitPageContentMediaQuery,
  smallDeviceSize,
} from '../../styles/constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
  padding:;
`;

const Icon = styled.div`
  color: ${offWhite};
  padding: 5px;
  &:hover {
    border: 2px solid ${secondary};
    border-radius: 10px;
  }
`;

const RightButtonGroup = styled.div`
  display: flex;
`;

const Header = () => {
  const { width } = useWindowSize();
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
          <GiHamburgerMenu size='2rem' />
        </Icon>
      </RightButtonGroup>
    );
  };

  return (
    <NavBackground data-testid='header'>
      <Nav>
        <Link to='/'>
          <Icon>
            <FaHome size='2rem' />
          </Icon>
        </Link>
        {renderRightButtonGroup()}
      </Nav>
    </NavBackground>
  );
};

export default Header;
