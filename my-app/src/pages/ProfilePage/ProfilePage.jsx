import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PageLayout} from "@templates";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {getProfileSagaAction} from "@redux/saga/sagaActions.js";

export function ProfilePage() {
  const {id} = useParams()

  const dispatch = useDispatch();

  const {profile, posts, isLoading} = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(getProfileSagaAction(id))
  }, [id]);
  
  return <PageLayout
    isLoading={isLoading}
    main={<Main profile={profile}/>}
    footer={<Footer posts={posts} isLoading={isLoading}/>}
  />
}