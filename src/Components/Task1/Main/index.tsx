import { useState } from "react";
import Card from "./Card";
import s from "./style.module.scss";
import { ProgressIconBig } from "../../../image/svg/ProgressIconBig";

let Main = () => {
  const [activeBtn, setActiveBtn] = useState<string>("btn1");

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
            <button>Скрыть пройденные</button>
          </div>

          <div className={s.content}>
            <Card
              title={"Добро пожаловать!"}
              forWhom={"Для новичка"}
              section={"Основы работы"}
              description={
                "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
              }
              completed={true}
              progress={8}
              countTask={10}
              started={true}
            />
            <Card
              title={"Начало работы"}
              forWhom={"Для новичка"}
              section={"Основы работы"}
              description={
                "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
              }
              completed={false}
              progress={8}
              countTask={10}
              started={true}
            />
            <Card
              title={"Введение в рабочую среду"}
              forWhom={"Для новичка"}
              section={"Основы работы"}
              description={
                "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
              }
              completed={false}
              progress={8}
              countTask={10}
              started={false}
            />
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
            <Card
              title={"Начало работы"}
              forWhom={"Для новичка"}
              section={"Основы работы"}
              description={
                "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
              }
              completed={false}
              progress={8}
              countTask={10}
              started={true}
              buttonText={"Продолжить"}
            />

            <Card
              title={"Работа с библиотеками GPN"}
              forWhom={"Профессионалу"}
              section={"Библиотеки"}
              description={
                "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
              }
              completed={false}
              progress={0}
              countTask={255}
              started={false}
            />
            <Card
              title={"Введение в рабочую среду "}
              forWhom={"Профессионалу"}
              section={"Библиотеки"}
              description={
                "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
              }
              completed={false}
              progress={0}
              countTask={10}
              started={false}
            />
            <Card
              title={"Начало работы"}
              forWhom={"Для новичка"}
              section={"Основы работы"}
              description={
                "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
              }
              completed={false}
              progress={3}
              countTask={10}
              started={true}
            />
            <Card
              title={"Работа с библиотеками GPN"}
              forWhom={"Профессионалу"}
              section={"Библиотеки"}
              description={
                "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
              }
              completed={false}
              progress={0}
              countTask={255}
              started={false}
            />
            <Card
              title={"Введение в рабочую среду "}
              forWhom={"Профессионалу"}
              section={"Библиотеки"}
              description={
                "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
              }
              completed={false}
              progress={0}
              countTask={10}
              started={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
