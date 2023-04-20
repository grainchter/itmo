import { useState } from "react";
import s from "./style.module.scss";
import Card from "../Card";

let Block3 = () => {
  let DATA = [
    {
      title: "Начало работы",
      forWhom: "Для новичка",
      section: "Основы работы",
      description:
        "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",

      progress: 8,
      countTask: 10,
      started: true,
      buttonText: "Продолжить",
      completed: false,
    },
    {
      title: "Работа с библиотеками GPN",
      forWhom: "Профессионалу",
      section: "Библиотеки",
      description:
        "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",

      completed: false,
      progress: 0,
      countTask: 255,
      started: false,
    },
    {
      title: "Введение в рабочую среду",
      forWhom: "Профессионалу",
      section: "Библиотеки",
      description:
        "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      completed: false,
      progress: 0,
      countTask: 10,
      started: false,
    },
    {
      title: "Начало работы",
      forWhom: "Для новичка",
      section: "Основы работы",
      description:
        "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      completed: false,
      progress: 3,
      countTask: 10,
      started: true,
    },
    {
      title: "Работа с библиотеками GPN",
      forWhom: "Профессионалу",
      section: "Библиотеки",
      description:
        "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      completed: false,
      progress: 0,
      countTask: 255,
      started: false,
    },
    {
      title: "Введение в рабочую среду ",
      forWhom: "Профессионалу",
      section: "Библиотеки",
      description:
        "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      completed: false,
      progress: 0,
      countTask: 10,
      started: false,
    },
  ];

  const [activeBtn, setActiveBtn] = useState<string>("btn1");

  return (
    <>
      <div className={s.container}>
        <div className={s.block3}>
          <h2>Каталог тем</h2>
          <div className={s.navigation}>
            <button
              id="btn1"
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                setActiveBtn(e.currentTarget.id);
              }}
              className={activeBtn === "btn1" ? s.active : ""}
            >
              Все
            </button>
            <button
              id="btn2"
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                setActiveBtn(e.currentTarget.id);
              }}
              className={activeBtn === "btn2" ? s.active : ""}
            >
              Рабочая среда
            </button>
            <button
              id="btn3"
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                setActiveBtn(e.currentTarget.id);
              }}
              className={activeBtn === "btn3" ? s.active : ""}
            >
              Библиотеки
            </button>
            <button
              id="btn4"
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                setActiveBtn(e.currentTarget.id);
              }}
              className={activeBtn === "btn4" ? s.active : ""}
            >
              Пройденые
            </button>
            <button
              id="btn5"
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                setActiveBtn(e.currentTarget.id);
              }}
              className={activeBtn === "btn5" ? s.active : ""}
            >
              Не пройденные
            </button>
          </div>
          <div className={s.content}>
            {activeBtn === "btn1" &&
              DATA &&
              DATA.map((item: any, i: any) => (
                <Card
                  key={i}
                  title={item.title}
                  forWhom={item.forWhom}
                  section={item.section}
                  description={item.description}
                  completed={item.completed}
                  progress={item.progress}
                  countTask={item.countTask}
                  started={item.started}
                  buttonText={item.buttonText}
                />
              ))}

            {activeBtn === "btn2" &&
              DATA &&
              DATA.map(
                (item: any, i: any) =>
                  item.section &&
                  item.section === "Основы работы" && (
                    <Card
                      key={i}
                      title={item.title}
                      forWhom={item.forWhom}
                      section={item.section}
                      description={item.description}
                      completed={item.completed}
                      progress={item.progress}
                      countTask={item.countTask}
                      started={item.started}
                      buttonText={item.buttonText}
                    />
                  )
              )}

            {activeBtn === "btn3" &&
              DATA &&
              DATA.map(
                (item: any, i: any) =>
                  item.section &&
                  item.section === "Библиотеки" && (
                    <Card
                      key={i}
                      title={item.title}
                      forWhom={item.forWhom}
                      section={item.section}
                      description={item.description}
                      completed={item.completed}
                      progress={item.progress}
                      countTask={item.countTask}
                      started={item.started}
                      buttonText={item.buttonText}
                    />
                  )
              )}

            {activeBtn === "btn4" &&
              DATA &&
              DATA.map(
                (item: any, i: any) =>
                  item.completed && (
                    <Card
                      key={i}
                      title={item.title}
                      forWhom={item.forWhom}
                      section={item.section}
                      description={item.description}
                      completed={item.completed}
                      progress={item.progress}
                      countTask={item.countTask}
                      started={item.started}
                      buttonText={item.buttonText}
                    />
                  )
              )}

            {activeBtn === "btn5" &&
              DATA &&
              DATA.map(
                (item: any, i: any) =>
                  !item.completed && (
                    <Card
                      key={i}
                      title={item.title}
                      forWhom={item.forWhom}
                      section={item.section}
                      description={item.description}
                      completed={item.completed}
                      progress={item.progress}
                      countTask={item.countTask}
                      started={item.started}
                      buttonText={item.buttonText}
                    />
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Block3;
