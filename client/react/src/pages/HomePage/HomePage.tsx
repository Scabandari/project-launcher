import useProtectedPage from 'src/hooks/useProtectedPage';

const HomePage = () => {
  useProtectedPage();
  return (
    <div data-testid='home-page'>
      <h1>Home Page</h1>
      <p>
        This is the Home Page.
        <br />
        For now you might want to check out the About Page to get a feel for
        where this is going!
      </p>
    </div>
  );
};
export default HomePage;
