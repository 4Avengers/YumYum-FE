//import CollectionService from "apis/service/CollectionService";
import Header from "components/layout/Header";
import Layout from "components/layout/Layout";
//import { useParams } from "react-router-dom";

const Collection = () => {
  //const { profileId } = useParams();
  //const { data: collections } = CollectionService.ReadCollectionList(profileId);

  return (
    <Layout hasPadding={false}>
      <Header title="dsd" headerType="PLUS" />
      <div className="flex flex-1 flex-col  bg-red-200">
        <div className="flex items-center space-x-[2rem]">
          <div className="h-[5rem] w-[5rem] rounded-full bg-primary-300" />
          <h3 className="text-[1.8rem] font-semibold">남양쥬 챠챠</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Collection;
