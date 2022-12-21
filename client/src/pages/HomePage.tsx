const HomePage = () => {
  return (
    <div data-testid='home-page'>
      <h2>This is a full stack project launcher (WIP)</h2>
      <p>
        The aim is to deliver a jumping off point for a production grade app
        complete with:
      </p>
      <ul>
        <li>
          <p>PostgreSQL database + Prisma ORM</p>
        </li>
        <li>
          <p>React + Redux + Sagas</p>
        </li>
        <li>
          <p>Node.js + Express backend</p>
        </li>
        <li>
          <p>Mocha for testing Express routes with examples</p>
        </li>
        <li>
          <p>Cypress for testing frontend pages with examples</p>
        </li>
        <li>
          <p>
            CI/CD ready using Github Actions to run tests, build images and
            deploy
          </p>
        </li>
        <li>
          <p>Dev deployments and testing done through docker-compose</p>
        </li>
        <li>
          <p>Styling done using the Emotion library</p>
        </li>
        <li>
          <p>Examples on how to build and test forms</p>
        </li>
        <li>
          <p>Robust logging solution usinging on-premise Sentry</p>
        </li>
        <li>
          <p>Everything should be responsive!</p>
        </li>
        <li>
          <p>I'll be adding features as I go</p>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
