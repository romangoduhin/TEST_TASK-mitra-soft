import './App.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPostsSagaAction} from "@redux/saga/sagaActions.js";

function App() {
  const dispatch = useDispatch()

  const {posts} = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPostsSagaAction())
  }, []);

  return (
    <>
      {posts.map(el => (<div key={el.id}>
        {el.title}
      </div>))
      }
    </>
  )
}

export default App
