import React from "react";
import Marker from "./Marker";

const Markers = ({ posts, map }) => {
  if (!posts || !map) return null;

  const onClick = () => {
    console.log("clicked!");
  };

  return (
    <>
      {posts?.map((post, idx) => (
        <Marker
          key={idx}
          map={map}
          lat={+post?.restaurant?.x}
          lon={+post?.restaurant?.y}
          icon={generateStoreMarkerIcon(post?.user?.profile_image)}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default Markers;

const MARKER_HEIGHT = 64;
const MARKER_WIDTH = 54;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3;

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;

export function generateStoreMarkerIcon(markerIndex, isSelected, url) {
  /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-8-marker-retina-sprite.example.html */
  return {
    url,
    size: new window.naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
    origin: new window.naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
    scaledSize: new window.naver.maps.Size(
      SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
      SCALED_MARKER_HEIGHT
    ),
  };
}
