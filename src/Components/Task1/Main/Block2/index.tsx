import { useState } from "react";
import s from "./style.module.scss";
import { Icon5 } from "../../../../image/svg/Icon5";
import { Icon6 } from "../../../../image/svg/Icon6";
import Card from "../Card";

let Block2 = () => {
  let DATA_BLOCK2 = [
    {
      title: "Добро пожаловать",
      forWhom: "Для новичка",
      section: "Основы работы",
      description:
        "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",

      progress: 10,
      countTask: 10,
      started: true,
      completed: true,
    },
    {
      title: "Начало работы",
      forWhom: "Для новичка",
      section: "Основы работы",
      description:
        "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",

      progress: 8,
      countTask: 10,
      started: true,
      completed: false,
    },
    {
      title: "Введение в рабочую среду",
      forWhom: "Для новичка",
      section: "Основы работы",
      description:
        "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",

      progress: 8,
      countTask: 10,
      started: false,
      completed: false,
    },
  ];

  const [hideCompleted, setHideCompleted] = useState<boolean>(false);

  return (
    <>
      <div className={s.container}>
        <div className={s.block2}>
          <div className={s.title}>
            <h2>Путь Front End Developer</h2>
            {!hideCompleted && (
              <button
                onClick={() => {
                  setHideCompleted(!hideCompleted);
                }}
              >
                Скрыть пройденные
              </button>
            )}

            {hideCompleted && (
              <button
                onClick={() => {
                  setHideCompleted(!hideCompleted);
                }}
              >
                Показать пройденные
              </button>
            )}

            <div className={s.navBtns}>
              <button>
                <Icon5 />
              </button>
              <button>
                <Icon6 />
              </button>
            </div>
          </div>

          <div className={s.content}>
            {!hideCompleted &&
              DATA_BLOCK2 &&
              DATA_BLOCK2.map((item: any, i: any) => (
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

            {hideCompleted &&
              DATA_BLOCK2 &&
              DATA_BLOCK2.map(
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

export default Block2;
