import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  rentalCounts: number;
}

function App({rentalCounts}: AppScreenProps): JSX.Element {
  return(
    <MainScreen rentalCounts={rentalCounts} />
  );
}

export default App;
