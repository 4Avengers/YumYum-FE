import { MdPlace } from "react-icons/md";

const PlaceCard = ({ place, onClick }) => {
  return (
    <div className="flex cursor-pointer  space-x-[2rem] ">
      <span className="mt-[0.2rem]">
        <MdPlace size="2rem" className="text-primary-500" />
      </span>
      <div className="flex flex-1 flex-col ">
        <strong className="Cap1">{place.place_name}</strong>
        <p className="Cap4 text-primary-500">{place.road_address_name}</p>
      </div>
      <button
        className="Cap4 max-h-[3.5rem] rounded-[1rem] bg-primary-600 px-[1rem] py-[0.5rem] text-primary-100 transition-colors hover:bg-primary-500"
        onClick={onClick}
      >
        변경
      </button>
    </div>
  );
};

export default PlaceCard;
