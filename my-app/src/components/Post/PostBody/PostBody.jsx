import React from 'react';

export function PostBody({title, text, width = "80%"}) {
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
      }}>Комментарии</p>
    </div>
  )
}