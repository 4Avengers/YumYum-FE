import Wrapper from "components/layout/Wrapper";
import CustomAlert from "elements/CustomAlert";
import useGeolocation from "hooks/useGeoLocation";
import { ReactQueryDevtools } from "react-query/devtools";
import RouteChnageTracker from "shared/RouteChnageTracker";
import Router from "shared/Router";

function App() {
  useGeolocation();
  RouteChnageTracker();

  return (
    <Wrapper>
      <Router />
      <CustomAlert />
      <ReactQueryDevtools initialIsOpen={false} />
    </Wrapper>
  );
}

export default App;
