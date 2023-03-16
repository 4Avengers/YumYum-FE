import MapService from "apis/service/MapService";
import Layout from "components/layout/Layout";
import QuestMap from "components/quest/map/Map";
import { BiSearch } from "react-icons/bi";

/** 탐색 */
const Quest = () => {
  const { data: posts } = MapService.GetMap();

  return (
    <Layout title="탐색" headerType="MAP" hasPadding={false}>
      <form
        className="absolute top-[6rem] z-[2] flex w-full  items-center px-[2rem] py-[2rem] "
        onSubmit={(e) => e.preventDefault()}
      >
        <BiSearch
          size="2rem"
          className="absolute left-[3rem] text-primary-500"
        />
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="Cap4 w-full rounded-[1rem] bg-gray-50 py-[0.8rem] pl-[4rem] pr-[1rem] shadow-md outline-none focus:ring-1 focus:ring-primary-400"
        />
      </form>
      <QuestMap posts={posts} />
    </Layout>
  );
};

export default Quest;
