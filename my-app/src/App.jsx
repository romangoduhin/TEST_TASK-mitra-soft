import './App.css'
import {Route, Routes} from "react-router-dom";
import {PostsPage} from "@pages";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/posts'} element={<PostsPage/>}/>
        {/*@todo add redirect to not found page or something like that */}
      </Routes>
    </>
  )
}

export default App
