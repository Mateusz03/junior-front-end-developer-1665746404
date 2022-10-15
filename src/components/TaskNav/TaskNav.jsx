import { useState } from "react";
import "./tasknav.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { messages } from "../Main/Main";
const Title = () => {
  return <div className="task-nav-title">your tasks</div>;
};

const Icon = (props) => {
  return (
    <>
      {props.icon === "completed" && (
        <div className="completed-icon icon">
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.92563 3.31147C2.46168 2.80026 1.67115 2.76194 1.15994 3.2259C0.648726 3.68985 0.610413 4.48038 1.07436 4.99159L2.92563 3.31147ZM4.2944 6.67966L3.36876 7.51972C3.60988 7.7854 3.95354 7.93466 4.31229 7.92953C4.67104 7.92439 5.01028 7.76535 5.2437 7.49288L4.2944 6.67966ZM9.69466 2.2971C10.1438 1.77281 10.0829 0.983703 9.55858 0.534574C9.0343 0.0854455 8.24519 0.146372 7.79606 0.670657L9.69466 2.2971ZM1.07436 4.99159L3.36876 7.51972L5.22003 5.8396L2.92563 3.31147L1.07436 4.99159ZM5.2437 7.49288L9.69466 2.2971L7.79606 0.670657L3.3451 5.86644L5.2437 7.49288Z"
              fill="#47BF7C"
            />
          </svg>
        </div>
      )}
      {props.icon === "active" && (
        <div className="active-icon icon">
          <svg
            width="8"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.25917 7.91355C2.88821 8.32269 2.91916 8.9551 3.3283 9.32607C3.73745 9.69704 4.36986 9.66609 4.74083 9.25694L3.25917 7.91355ZM7 5.27649L7.74083 5.94818C8.08639 5.56705 8.08639 4.98592 7.74083 4.60479L7 5.27649ZM4.74083 1.29603C4.36986 0.886888 3.73745 0.855937 3.3283 1.2269C2.91916 1.59787 2.88821 2.23028 3.25917 2.63943L4.74083 1.29603ZM0.999999 4.27649C0.447714 4.27649 -1.12447e-06 4.7242 -1.16824e-06 5.27649C-1.21202e-06 5.82877 0.447714 6.27649 0.999999 6.27649L0.999999 4.27649ZM4.74083 9.25694L7.74083 5.94818L6.25917 4.60479L3.25917 7.91355L4.74083 9.25694ZM7.74083 4.60479L4.74083 1.29603L3.25917 2.63943L6.25917 5.94818L7.74083 4.60479ZM7 4.27649L0.999999 4.27649L0.999999 6.27649L7 6.27649L7 4.27649Z"
              fill="#EAF2FE"
            />
          </svg>
        </div>
      )}
      {props.icon === "blocked" && (
        <div className="blocked-icon icon">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.746552"
              width="16"
              height="17.6467"
              rx="2"
              fill="#F4F5F7"
            />
            <path
              d="M9.00024 9.5699C9.00024 10.1222 9.44796 10.5699 10.0002 10.5699C10.5525 10.5699 11.0002 10.1222 11.0002 9.5699H9.00024ZM5.00024 9.5699C5.00024 10.1222 5.44796 10.5699 6.00024 10.5699C6.55253 10.5699 7.00024 10.1222 7.00024 9.5699H5.00024ZM11.0002 9.5699V7.15823H9.00024V9.5699H11.0002ZM5.00024 7.15823V9.5699H7.00024V7.15823H5.00024ZM8.00024 4.15823C6.34339 4.15823 5.00024 5.50137 5.00024 7.15823H7.00024C7.00024 6.60594 7.44796 6.15823 8.00024 6.15823V4.15823ZM11.0002 7.15823C11.0002 5.50137 9.6571 4.15823 8.00024 4.15823V6.15823C8.55253 6.15823 9.00024 6.60594 9.00024 7.15823H11.0002Z"
              fill="#AEB5C1"
            />
            <path
              d="M8.73235 8.5483H7.26809C6.08368 8.5483 5.49147 8.5483 5.0447 8.7912C4.70568 8.97552 4.42722 9.25398 4.2429 9.593C4 10.0398 4 10.632 4 11.8164C4 13.0008 4 13.593 4.2429 14.0398C4.42722 14.3788 4.70568 14.6573 5.0447 14.8416C5.49147 15.0845 6.08368 15.0845 7.26809 15.0845H8.73235C9.91676 15.0845 10.509 15.0845 10.9557 14.8416C11.2948 14.6573 11.5732 14.3788 11.7575 14.0398C12.0004 13.593 12.0004 13.0008 12.0004 11.8164C12.0004 10.632 12.0004 10.0398 11.7575 9.593C11.5732 9.25398 11.2948 8.97552 10.9557 8.7912C10.509 8.5483 9.91676 8.5483 8.73235 8.5483Z"
              fill="#6B778C"
            />
            <ellipse
              rx="0.500027"
              ry="0.544681"
              transform="matrix(1 0 0 -1 8.00021 11.8167)"
              fill="white"
            />
          </svg>
        </div>
      )}
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {props.state === "completed" && (
        <div className="completed-content" style={props.style}>
          {props.content}
        </div>
      )}
      {props.state === "active" && (
        <div className="active-content" style={props.style}>
          {props.content}
        </div>
      )}
      {props.state === "blocked" && (
        <div className="blocked-content">{props.content}</div>
      )}
    </>
  );
};
const Task = (props) => {
  return (
    <li className="task">
      <Icon icon={props.state} />
      <Content content={props.content} state={props.state} />
    </li>
  );
};

const TaskContainer = () => {
  const [target, setTarget] = useState();
  const navigate = useNavigate();
  const tasks = useContext(messages);
  return (
    <ol className="task-container">
      {tasks.map((task, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              if (task.task.state !== "blocked") {
                setTarget(index);
                navigate(`/${index}`);
              }
            }}
            style={{ fontWeight: target === index ? "600" : "500" }}
          >
            <Task state={task.task.state} content={task.task.content} />
          </div>
        );
      })}
    </ol>
  );
};

const TaskNav = () => {
  return (
    <div className="task-nav">
      <Title />
      <TaskContainer />
    </div>
  );
};
export default TaskNav;
