import "./messagehead.css";
const New = (props) => {
  return <>{props.new && <div className="new-message-icon">New</div>}</>;
};
const Username = (props) => {
  return <div className="message-top-text">{props.username}</div>;
};
const Date = (props) => {
  return <div className="message-top-text">{props.date}</div>;
};
const Title = (props) => {
  return (
    <p
      className="message-title-text"
      style={{
        color: props.new ? "#0165FF" : "#6B778C",
      }}
    >
      {props.title}
    </p>
  );
};
const Content = (props) => {
  return <span className="message-content">{props.content}</span>;
};

const MessageHead = (props) => {
  return (
    <>
      <div className="message-header">
        <New new={props.new} />
        <div className="message-header-text">
          <Username username={props.username} />·<Date date={props.date} />
        </div>
      </div>
      <div className="message-footer">
        <Title new={props.new} title={props.title} />
        <Content content={props.content} />
      </div>
    </>
  );
};
export default MessageHead;
