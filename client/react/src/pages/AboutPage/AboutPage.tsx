import { FaCheck } from 'react-icons/fa';
import styled from '@emotion/styled';
import useProtectedPage from 'src/hooks/useProtectedPage';

const StyledListItem = styled.li`
  font-size: 16px;
`;

const Flex = styled.div`
  display: flex;
  align-items: flrex-start;
  svg {
    margin-left: 1rem;
    align-self: center;
    min-width: 16px;
    min-height: 16px;
  }
`;

const bulletPoints = [
  {
    phrase: 'Fully containerized and hosted on Google Cloud Platform',
    checkMark: true,
  },
  {
    phrase:
      'A CI/CD pipeline using Github Actions & Google Cloud Run to deploy to production',
    checkMark: true,
  },
  { phrase: 'PostgreSQL database + Sequelize ORM', checkMark: true },
  { phrase: 'Token based authentication', checkMark: true },
  { phrase: 'Session based authentication', checkMark: false },
  { phrase: 'Node.js + Typescript + Express backend', checkMark: true },
  { phrase: 'React + Typescript', checkMark: true },
  { phrase: 'Redux frontend state management', checkMark: true },
  { phrase: 'Redux Sagas for side effects', checkMark: true },
  {
    phrase: 'Mocha for testing Express routes with examples',
    checkMark: true,
  },
  {
    phrase: 'Cypress for testing frontend pages with examples',
    checkMark: false,
  },
  {
    phrase: 'Dev deployments and testing done through docker-compose',
    checkMark: true,
  },
  { phrase: 'Modern styling with the Emotion library', checkMark: true },
  { phrase: 'Examples on how to build and test forms', checkMark: false },
  { phrase: 'Robust logging solution', checkMark: false },
  { phrase: 'Everything should be responsive!', checkMark: false },
];

const AboutPage = () => {
  useProtectedPage();

  return (
    <div data-testid='about-page'>
      <h2>
        This is a full stack{' '}
        <a href='https://github.com/Scabandari/project-launcher'>
          project launcher
        </a>{' '}
        (WIP)
      </h2>
      <p>
        The aim is to deliver a starting point for a production grade app that
        can be forked into other projects with:
      </p>
      <ul>
        {bulletPoints.map(({ phrase, checkMark }) => (
          <StyledListItem key={phrase}>
            <Flex>
              <p>{phrase}</p>
              {checkMark && <FaCheck color='green' size='16px' />}
            </Flex>
          </StyledListItem>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
