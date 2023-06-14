import './App.css'
import {Route, Routes} from "react-router-dom";
import {PostsPage} from "@pages";
import {ProfilePage} from "@pages/ProfilePage/index.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/posts'} element={<PostsPage/>}/>
        <Route path={'/profile/:id'} element={<ProfilePage/>}/>

        {/*@todo add redirect to not found page or something like that */}
      </Routes>
    </>
  )
}

export default App
