import CustomAlert from "components/common/CustomAlert";
import useGeolocation from "hooks/useGeoLocation";
import Router from "shared/Router";

function App() {
  const { location } = useGeolocation();
  return (
    <>
      <Router />
      <CustomAlert />
    </>
  );
}

export default App;
