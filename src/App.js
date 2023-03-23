import Wrapper from "components/layout/Wrapper";
import CustomAlert from "elements/CustomAlert";
import useGeolocation from "hooks/useGeoLocation";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "shared/Router";

function App() {
  useGeolocation();

  return (
    <Wrapper>
      <Router />
      <CustomAlert />
      <ReactQueryDevtools initialIsOpen={false} />
    </Wrapper>
  );
}

export default App;
