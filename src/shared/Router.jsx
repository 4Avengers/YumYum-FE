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
import { Navigate, Route, Routes } from "react-router-dom";
import OAuth2RedirectHandler from "pages/social/OAuth2RedirectHandler";
import Home from "pages/Home/Index";
import Bookmark from "pages/bookmark/Index";
import BookmarkDetail from "pages/bookmark/BookmarkDetail";
import Chats from "pages/chats/Index";

const Router = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const isExist = hasToken();
    if (!isExist) {
      setIsLogin(false);
    }
  }, [setIsLogin]);

  return (
    <Routes>
      <Route
        path="/auth/kakao/callback"
        element={<OAuth2RedirectHandler provider="kakao" />}
      />

      <Route
        path="/auth/google/callback"
        element={<OAuth2RedirectHandler provider="google" />}
      />
      <Route
        path="/auth/naver/callback"
        element={<OAuth2RedirectHandler provider="naver" />}
      />

      <Route path="/" element={<Home />} />
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
      <Route
        path="/quest"
        element={!isLogin ? <Navigate to="/start/login" replace /> : <Quest />}
      />
      <Route
        path="/search"
        element={!isLogin ? <Navigate to="/start/login" replace /> : <Search />}
      />
      <Route
        path="/profile/:profileId"
        element={
          !isLogin ? <Navigate to="/start/login" replace /> : <Profile />
        }
      >
        <Route
          path="collections"
          element={
            !isLogin ? <Navigate to="/start/login" replace /> : <Collection />
          }
        >
          <Route
            path=":collectionId"
            element={
              !isLogin ? (
                <Navigate to="/start/login" replace />
              ) : (
                <CollectionDetail />
              )
            }
          />
        </Route>
      </Route>
      <Route
        path="/post/write"
        element={
          !isLogin ? <Navigate to="/start/login" replace /> : <PostWrite />
        }
      />
      <Route
        path="/post/:id/edit"
        element={
          !isLogin ? <Navigate to="/start/login" replace /> : <PostEdit />
        }
      />
      <Route
        path="/bookmark"
        element={
          !isLogin ? <Navigate to="/start/login" replace /> : <Bookmark />
        }
      >
        <Route path=":collectionId" element={<BookmarkDetail />} />
      </Route>
      <Route path="/chats/:receiverId" element={<Chats />} />
    </Routes>
  );
};

export default Router;
