import { hasToken } from "apis/token";
import Begin from "components/start/Begin";
import SignIn from "components/start/SignIn";
import SignUp from "components/start/SignUp";
// import Home from "pages/Index";
import NewsFeed from "pages/newsfeed/Index";
import PostEdit from "pages/post/Edit";
import PostWrite from "pages/post/Write";
import Collection from "pages/profile/collection/Detail";
import CollectionList from "pages/profile/collection/Index";
import ProfileEdit from "pages/profile/Edit";
import Profile from "pages/profile/Index";
import Quest from "pages/quest/Index";
import Search from "pages/search/Index";
import Start from "pages/start/Index";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isExist = hasToken();
    if (isExist) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [setIsLogin]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/newsfeed" replace />} />
        <Route path="/start" element={<Start />}>
          <Route
            path=""
            element={isLogin ? <Navigate to="/" replace /> : <Begin />}
          />
          <Route path="login" element={<SignIn />} />
          <Route
            path="signup"
            element={isLogin ? <Navigate to="/" replace /> : <SignUp />}
          />
        </Route>
        <Route
          path="newsfeed"
          element={
            !isLogin ? <Navigate to="/start/login" replace /> : <NewsFeed />
          }
        />
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
        <Route path="/post/:id/edit" element={<PostEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

/**
 채팅 알림은 modal 처리 
 애니메이션은 가장 마지막
 */
