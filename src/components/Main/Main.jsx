import TopBar from "../TopBar/TopBar";
import MessageContaier from "../MessageContainer/MessageContainer";
import "./main.css";
import picture2 from "../../assets/exPic2.png";
import { createContext } from "react";
export const messages = createContext([
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lordasdem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum doldadqe123or sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolo312313r sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum doldadqe123or sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolo312313r sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum doldadqe123or sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolo312313r sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum doldadqe123or sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolo312313r sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor si13131t amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit ame414124t, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor s512412it amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum doldadqe123or sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolo312313r sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum doldadqe123or sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolo312313r sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit ame31231t, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit ame31321t, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit a31231met, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit 12451amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum doldadqe123or sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolo312313r sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum doldadqe123or sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolo312313r sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit am31312et, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit am4121231et, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit a4124123met, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit a41231met, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit a4123412met, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: false,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit am4123213et, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit 4123amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit412123 amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit 21313amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit 42131amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "completed", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "active", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sdsaad1213it amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit 3124125amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit a31451231met, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit ametdasdad, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
  {
    task: { state: "blocked", content: "Aplication setup" },
    context: [
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
      {
        image: picture2,
        new: true,
        username: "Olga Nelson",
        date: "Dec 17",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum diam quis diam consequat, in placerat metus cursus. Quisque tincidunt ex consequat magna pharetra laoreet.",
      },
    ],
  },
]);

const Main = () => {
  return (
    <div className="main">
      <TopBar />
      <MessageContaier />
    </div>
  );
};
export default Main;
