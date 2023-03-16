import React from "react";
import Marker from "./Marker";

const Markers = ({ posts, map }) => {
  if (!posts || !map) return null;

  const onClick = () => {
    console.log("clicked!");
  };

  return (
    <>
      {React.Children.toArray(
        posts?.map((post) => (
          <Marker
            map={map}
            lat={+post?.restaurant?.x}
            lon={+post?.restaurant?.y}
            onClick={onClick}
          />
        ))
      )}
    </>
  );
};

export default Markers;
