import UserContainter from "./UserContainter";
import LocationWithRating from "./LocationWithRating";
import IconContainer from "./IconContainer";
import Paragragh from "./Paragragh";

const PostCard = () => {
  return (
    <>
      <li className="flex flex-col border-b pt-[2rem] pb-[2rem] first:pt-0">
        <UserContainter post={post} />
        <LocationWithRating post={post} />
        <img src={post.img_url} alt="product" className="object-cover" />
        <IconContainer />
        <p className="Cap3 px-[2rem]">좋아요 {post.totalLikes}개</p>
        <Paragragh post={post} />
        <button className="Cap4 mt-[0.8rem] cursor-pointer px-[2rem] text-start text-primary-500">{`댓글 ${21}개 모두 보기`}</button>
      </li>
    </>
  );
};

export default PostCard;

const post = {
  id: 3,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit urna. Fusce et mollis velit. Aliquam non massa a nisi porttitor dictum. Vestibulum et commodo libero.",
  rating: 5,
  img_url:
    "https://media.istockphoto.com/id/1147544807/ko/%EB%B2%A1%ED%84%B0/%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%8D%B8%EB%84%A4%EC%9D%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B2%A1%ED%84%B0-%EA%B7%B8%EB%9E%98%ED%94%BD.jpg?s=612x612&w=0&k=20&c=d0Ddt3qdtkhxPvpInjBRzLWFjODlfSh3IkKAB6YZwC8=",
  updated_at: "2023-03-11T15:40:03.873Z",
  user: {
    id: 1,
    nickname: "나먕쥬차차",
    profileImage: "https://avatars.dicebear.com/api/identicon/wooncloud.svg",
  },
  restaurant: {
    id: 1,
    place_name: "맥도날드 평내DT점",
    category_name: "중식",
    category_group_name: "식당",
    phone_number: "번호",
    img_url: "이미지",
    kakao_place_id: "아이디",
    latitude: 58.695946,
    longitude: 11.2533509,
    address_name: "경기 남양주시 평내동 246-21",
    road_address: "주소",
    createdAt: "2023-03-    11T15:38:18.784Z",
    updatedAt: "2023-03-    11T15:38:18.784Z",
    deleted_at: null,
  },
  hashtags: ["해시태그 하나", "둘"],
  totalLikes: 0,
};

/**
 * 
 * address_name
: 
"경기 남양주시 평내동 246-21"
category_group_code
: 
"FD6"
category_group_name
: 
"음식점"
category_name
: 
"음식점 > 패스트푸드 > 맥도날드"
distance
: 
"2661"
id
: 
"21567808"
phone
: 
"070-7017-6508"
place_name
: 
"맥도날드 평내DT점"
place_url
: 
"http://place.map.kakao.com/21567808"
road_address_name
: 
"경기 남양주시 경춘로 1273"
x
: 
"127.234876440517"
y
: 
"37.6480255687826"
status
: 
"public"
visibility
: 
"public"
 */
