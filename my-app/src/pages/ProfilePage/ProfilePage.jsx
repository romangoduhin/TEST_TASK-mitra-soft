import React, {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PageLayout} from "@templates";
import {Main} from "./Main";
import {getProfileSagaAction} from "@redux/saga/sagaActions.js";
import {AlertContext} from "@context";

export function ProfilePage() {
  const {id} = useParams()

  const dispatch = useDispatch();

  const showAlert = useContext(AlertContext);

  const {profile, posts, errorMessage, isLoading} = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(getProfileSagaAction(id))
  }, [id]);

  useEffect(() => {
    if (errorMessage) {
      showAlert(errorMessage)
    }
  }, [errorMessage]);

  return <PageLayout
    isLoading={isLoading}
    main={<Main posts={posts} profile={profile}/>}
  />
}