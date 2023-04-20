import { useState } from "react";
import Card from "./Card";
import s from "./style.module.scss";
import { ProgressIconBig } from "../../../image/svg/ProgressIconBig";
import { Icon5 } from "../../../image/svg/Icon5";
import { Icon6 } from "../../../image/svg/Icon6";

let Main = () => {
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
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);

  return (
    <>
      <div className={s.container}>
        <div className={s.block1}>
          <h2>Рекомендуемые темы</h2>
          <div className={s.content}>
            <div className={s.wrap}>
              <div className={s.progressBar}>
                <div className={s.progress}>
                  <ProgressIconBig progress={8} countTask={10} />
                </div>
                <div className={s.textContent}>
                  <div className={s.textContentContainer}>
                    <p className={s.numbersValue}>8/10</p>
                    <p>заданий</p>
                  </div>
                </div>
              </div>
              <div className={s.info}>
                <p className={s.title}>Начало работы</p>
                <div className={s.about}>
                  <p>Для новичка</p>
                  <div className={s.circle}></div>
                  <p>Основы работы</p>
                </div>
                <div className={s.description}>
                  <p>
                    Познакомьтесь ближе с компанией и узнайте больше о том, что
                    вы делаете
                  </p>
                </div>
                <div className={s.btn}>
                  <button>Продолжить тему</button>
                </div>
              </div>
            </div>
          </div>
          <div className={s.showMore}>
            <div className={s.line}></div>
            <div className={s.btn}>
              <button>Показать ещё</button>
            </div>
            <div className={s.line}></div>
          </div>
        </div>

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

export default Main;
