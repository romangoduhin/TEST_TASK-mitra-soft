import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {AboutMePage, PostsPage, ProfilePage} from "@pages";
import {AlertProvider} from "@context";

function App() {
  return (
    <AlertProvider>
      <Routes>
        <Route path={"/posts"} element={<PostsPage/>}/>
        <Route path={"/profile/:id"} element={<ProfilePage/>}/>
        <Route path={"/about-me"} element={<AboutMePage/>}/>
        <Route path="*" element={<Navigate to="/posts" replace/>}/>
      </Routes>
    </AlertProvider>
  )
}

export default App
