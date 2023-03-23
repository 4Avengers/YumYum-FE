import CustomAlert from "elements/CustomAlert";
import useGeolocation from "hooks/useGeoLocation";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "shared/Router";

function App() {
  useGeolocation();

  return (
    <div className="flex w-screen items-center justify-center bg-red-200">
      <div>hello</div>
      <Router />
      <CustomAlert />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
