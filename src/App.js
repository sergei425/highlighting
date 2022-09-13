/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import "./App.css";

import React, { useState } from "react";

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}

function Article(props) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#s">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

function Video(props) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="item item-video">
      // eslint-disable-next-line jsx-a11y/iframe-has-title
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}

function List(props) {
  console.log(props.list);
  // eslint-disable-next-line array-callback-return
  const list = props.list.map((item, index) => {
    const elem = item.type === 'video' ? <Video {...item}/> : <Article {...item}/>
    
    // eslint-disable-next-line default-case
    switch (true) {
      case item.views < 100:
        return <New key={index}>{elem}</New>;

      case item.views > 1000:
        return <Popular key={index}>{elem}</Popular>;
    }
  });
  return list
}

export default function App() {
  const [list, setList] = useState([
    {
      type: "video",
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      views: 50,
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      views: 12,
    },
    {
      type: "article",
      title: "Невероятные события в неизвестном поселке...",
      views: 175,
    },
    {
      type: "article",
      title: "Секретные данные были раскрыты!",
      views: 1532,
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      views: 4253,
    },
    {
      type: "article",
      title: "Кот Бегемот обладает невероятной...",
      views: 12,
    },
  ]);

  return <List list={list} />;
}
