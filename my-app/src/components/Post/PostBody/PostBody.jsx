import React from 'react';

export function PostBody({title, text, comments, width = "80%", isCommentsVisible, handleCommentsClick}) {
  return (
    <div style={{
      width: width,
      display: "flex",
      flexDirection: "column",
      textTransform: "capitalize",
    }}>
      <div style={{
        width: "100%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
      }}>
        <h1 style={{margin: 0}}>{title}</h1>
        <p style={{margin: 0}}>{text}</p>
      </div>
      <p style={{
        margin: 0,
        width: "100%",
        height: "20%",
        display: "flex",
        alignItems: "flex-end",
        color: "blue",
      }}
         onClick={handleCommentsClick}
      >Комментарии</p>
      {isCommentsVisible && <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <h5>{comment.email}</h5>
            <p>{comment.body}</p>
          </div>))
        }
      </div>}
    </div>
  )
}