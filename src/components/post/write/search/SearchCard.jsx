import { MdPlace } from "react-icons/md";

const SearchCard = ({ place, setRestaurant, setModal }) => {
  const onClick = async (e) => {
    setRestaurant(place);
    setModal(e);
  };

  return (
    <li
      className="flex cursor-pointer space-x-[2rem] border-b p-[2rem] last:border-none"
      onClick={onClick}
    >
      <span className="mt-[0.2rem]">
        <MdPlace size="2rem" className="text-primary-500" />
      </span>
      <div className="flex flex-1 flex-col ">
        <strong className="Cap1">{place?.place_name}</strong>
        <p className="Cap4 text-primary-500">{place?.road_address_name}</p>
      </div>
      <div className="flex flex-col items-center text-primary-500">
        <span className="Cap5">
          {place?.category_name?.split(">")?.reverse()[0]?.trim()}
        </span>
        <span className="Cap5">{(+place?.distance / 1000).toFixed(1)}km</span>
      </div>
    </li>
  );
};

export default SearchCard;
