import "./display.css";
import { useContext } from "react";
import { DisplayContext } from "../MessageContainer/MessageContainer";
import { useEffect } from "react";

const Title = (props) => {
  return <div className="display-title">{props.text}</div>;
};
const Image = (props) => {
  return (
    <>
      <img src={props.pic} alt="img" className="picture display-img" />
    </>
  );
};
const Username = (props) => {
  return <div className="display-username">{props.username}</div>;
};
const Date = (props) => {
  return <div className="display-date">{props.date}</div>;
};
const Content = (props) => {
  return <div className="display-content">{props.content}</div>;
};

const Display = () => {
  const { displayMessage } = useContext(DisplayContext);

  return (
    <div className="display">
      <Title text={displayMessage.title} />
      <div className="user-content-container">
        <Image pic={displayMessage.image} />
        <div className="username-and-date">
          <Username username={displayMessage.username} />·
          <Date date={displayMessage.date} />
        </div>
      </div>
      <Content content={displayMessage.content} />
    </div>
  );
};

export default Display;
