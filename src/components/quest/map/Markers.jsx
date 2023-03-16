import MapService from "apis/service/MapService";
import React from "react";
import Marker from "./Marker";

const Markers = () => {
  const { data: map } = MapService.GetMap();
  console.log("map", map);
  if (!map) return null;
  return (
    <>
      {React.Children.toArray(
        map?.map((place) => (
          <Marker
            map={place}
            coordinates={[place?.x, place?.y]}
            image={place?.user?.profile_image}
          />
        ))
      )}
    </>
  );
};

export default Markers;
