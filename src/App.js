import CustomAlert from "elements/CustomAlert";
import useGeolocation from "hooks/useGeoLocation";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "shared/Router";

function App() {
  useGeolocation();

  return (
    <>
      <Router />
      <CustomAlert />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
