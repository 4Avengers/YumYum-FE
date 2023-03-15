import ProfileService from "apis/service/ProfileService";
import CustomAlert from "elements/CustomAlert";
import useGeolocation from "hooks/useGeoLocation";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "shared/Router";

function App() {
  useGeolocation();
  const { data } = ProfileService.LoginUser();
  console.log(data);

  return (
    <>
      <Router />
      <CustomAlert />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
