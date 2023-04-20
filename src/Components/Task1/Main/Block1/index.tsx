import s from "./style.module.scss";
import { ProgressIconBig } from "../../../../image/svg/ProgressIconBig";

let Block1 = () => {
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
      </div>
    </>
  );
};

export default Block1;
