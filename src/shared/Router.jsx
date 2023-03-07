import Home from "pages/Index";
import NewsFeed from "pages/newsfeed/Index";
import PostWrite from "pages/post/Write";
import Collection from "pages/profile/collection/Detail";
import CollectionList from "pages/profile/collection/Index";
import ProfileEdit from "pages/profile/Edit";
import Profile from "pages/profile/Index";
import Quest from "pages/quest/Index";
import Search from "pages/search/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" exact>
          <Route path="signin" />
          <Route path="signup" />
        </Route>
        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/edit" element={<ProfileEdit />} />
        <Route path="/profile/:id/collection" element={<CollectionList />} />
        <Route
          path="/profile/:id/collection/:collectionId"
          element={<Collection />}
        />
        <Route path="/post/write" element={<PostWrite />} />
        <Route path="/post/:id/edit" element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

/**
 채팅 알림은 modal 처리 
 애니메이션은 가장 마지막
 */
