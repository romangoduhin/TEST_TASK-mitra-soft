export const sagaActions = {
  GET_POSTS: "GET_POSTS",
  GET_PROFILE: "GET_PROFILE"
};

export function getPostsSagaAction() {
  return {type: sagaActions.GET_POSTS}
}

export function getProfileSagaAction(userId) {
  return {type: sagaActions.GET_PROFILE, payload: userId}
}


