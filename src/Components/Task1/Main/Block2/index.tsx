import { useState } from "react";
import s from "./style.module.scss";
import { Icon5 } from "../../../../image/svg/Icon5";
import { Icon6 } from "../../../../image/svg/Icon6";
import Card from "../Card";

let Block2 = () => {
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);
  const [slidesToShow, setSlidesToShow] = useState<Array<number>>([0, 1, 2]);
  const [itemsLength, setItemsLength] = useState<number>(0);

  let nextSlide = () => {
    let arr: Array<number> = slidesToShow;
    let res: Array<number> = [];

    if (!hideCompleted) {
      if (arr[2] < DATA_BLOCK2.length - 1) {
        arr.map((item: number) => {
          item++;
          res.push(item);
        });
        setSlidesToShow(res);
      }
    }
  };

  let prevSlide = () => {
    let arr: Array<number> = slidesToShow;
    let res: Array<number> = [];

    if (!hideCompleted) {
      if (arr[0] > 0) {
        arr.map((item: number) => {
          item--;

          res.push(item);
        });
        setSlidesToShow(res);
      }
    }
  };

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
  ];

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
                  setSlidesToShow([0, 1, 2]);
                }}
              >
                Скрыть пройденные
              </button>
            )}

            {hideCompleted && (
              <button
                onClick={() => {
                  setHideCompleted(!hideCompleted);
                  setSlidesToShow([0, 1, 2]);
                }}
              >
                Показать пройденные
              </button>
            )}

            <div className={s.navBtns}>
              <button onClick={prevSlide}>
                <Icon5 />
              </button>
              <button onClick={nextSlide}>
                <Icon6 />
              </button>
            </div>
          </div>

          <div className={s.content}>
            {!hideCompleted &&
              DATA_BLOCK2 &&
              DATA_BLOCK2.map(
                (item: any, i: any) =>
                  slidesToShow.includes(i) && (
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
