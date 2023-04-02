import { FaCheck } from 'react-icons/fa';
import styled from '@emotion/styled';

const StyledListItem = styled.li`
  height: 2rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: flrex-start;
  svg {
    margin-left: 1rem;
    align-self: center;
  }
`;

const bulletPoints = [
  { phrase: 'Both token and session based authentication', checkMark: false },
  { phrase: 'PostgreSQL database + Sequelize ORM', checkMark: true },
  { phrase: 'Node.js + Typescript + Express backend', checkMark: true },
  { phrase: 'React + Typescript', checkMark: true },
  { phrase: 'Redux + Sagas for frontend state management', checkMark: false },
  {
    phrase: 'Mocha for testing Express routes with examples',
    checkMark: true,
  },
  {
    phrase: 'Cypress for testing frontend pages with examples',
    checkMark: true,
  },
  {
    phrase: 'Fully containerized and hosted on Google Cloud Platform',
    checkMark: true,
  },
  {
    phrase:
      'ACI/CD ready using Github Actions to run tests, build images and deploy',
    checkMark: true,
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
  return (
    <div data-testid='about-page'>
      <h2>This is a full stack project launcher (WIP)</h2>
      <p>
        The aim is to deliver a starting point for a production grade app that
        can be forked into other projects with:
      </p>
      <ul>
        {bulletPoints.map(({ phrase, checkMark }) => (
          <StyledListItem>
            <Flex>
              <p>{phrase}</p>
              {checkMark && <FaCheck color='green' />}
            </Flex>
          </StyledListItem>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
