import { messages } from "../Main/Main";
import MessageHead from "../MessageHead/MessgeHead";
import { useContext, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import "./messagecontainer.css";
import Display from "../Display/Display";

export const DisplayContext = createContext();

const MessageContaier = () => {
  const { id } = useParams();
  const message = useContext(messages);
  const [stateIndex, setIndex] = useState();
  const [displayMessage, setMessage] = useState();
  return (
    <>
      <div className="message-container">
        {id &&
          message[id].context.map((mess, index) => {
            return (
              <div
                className="message"
                key={index}
                onClick={() => {
                  setIndex(index);
                  mess.new = false;
                  setMessage(mess);
                }}
                style={{
                  backgroundColor:
                    stateIndex === index ? "transparent" : "#ffffff",
                  boxShadow:
                    stateIndex === index
                      ? "none"
                      : "0px 1px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <MessageHead
                  new={mess.new}
                  username={mess.username}
                  date={mess.date}
                  title={mess.title}
                  content={mess.content}
                />
              </div>
            );
          })}
      </div>
      {displayMessage && (
        <DisplayContext.Provider value={{ displayMessage }}>
          <Display />
        </DisplayContext.Provider>
      )}
    </>
  );
};
export default MessageContaier;
