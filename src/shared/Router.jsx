import { hasToken } from "apis/token";
import Begin from "components/start/Begin";
import SignIn from "components/start/SignIn";
import SignUp from "components/start/SignUp";
import CollectionDetail from "pages/collection/CollectionDetail";
import Collection from "pages/collection/Index";

import NewsFeed from "pages/newsfeed/Index";
import PostEdit from "pages/post/Edit";
import PostWrite from "pages/post/Write";
import Profile from "pages/profile/Index";
import Quest from "pages/quest/Index";
import Search from "pages/search/Index";
import Start from "pages/start/Index";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import OAuth2RedirectHandler from "pages/social/OAuth2RedirectHandler";
import Home from "pages/Home/Index";

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
        <Route
          path="/auth/kakao/callback"
          element={<OAuth2RedirectHandler />}
        />
        <Route
          path="/"
          element={!isLogin ? <Navigate to="/start/login" replace /> : <Home />}
        />
        <Route
          path="/start"
          element={isLogin ? <Navigate to="/" replace /> : <Start />}
        >
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
        <Route path="/profile/:profileId" element={<Profile />}>
          <Route path="collections" element={<Collection />}>
            <Route path=":collectionId" element={<CollectionDetail />} />
          </Route>
        </Route>
        <Route path="/post/write" element={<PostWrite />} />
        <Route path="/post/:id/edit" element={<PostEdit />} />

        {/* <Route path="/api/users/google/callback" element={<Profile />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

/**
 채팅 알림은 modal 처리 
 애니메이션은 가장 마지막
 */
