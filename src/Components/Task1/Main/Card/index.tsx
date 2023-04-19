import s from "./style.module.scss";
import { Icon4 } from "../../../../image/svg/Icon4";
import { ProgressIcon } from "../../../../image/svg/ProgressIcon";
import { CompleteIcon } from "../../../../image/svg/CompleteIcon";

interface PCard {
  title: string;
  forWhom: string;
  section: string;
  description: string;
  completed: boolean;
  progress: number;
  countTask: number;
  buttonText?: string | null;
  started: boolean;
}

let Card = ({
  title,
  forWhom,
  section,
  description,
  completed,
  progress,
  countTask,
  buttonText,
  started,
}: PCard) => {
  return (
    <div className={s.content}>
      <p className={s.title}>{title}</p>
      <div className={s.about}>
        <p>{forWhom}</p>
        <div className={s.circle}></div>
        <p>{section}</p>
      </div>
      <div className={s.description}>
        <p>{description}</p>
      </div>

      {completed && started &&(
        <div className={s.btnCompleted}>
          <button><Icon4 /> Пройти заново</button>
          <div className={s.progressCompleted}>
            <CompleteIcon />
          </div>
        </div>
      )}

      {!completed && started &&(
        <div className={s.btn}>
          <button>{buttonText ? buttonText : 'Продолжить тему'}</button>
          <p>
            {progress}/{countTask} <em>заданий</em>
          </p>
          <div className={s.progress}>
            <ProgressIcon progress={progress} countTask={countTask} />
          </div>
        </div>
      )}

      {!started && (
        <div className={s.btn}>
          <button>Начать</button>
          <p>
            {countTask} <em>заданий</em>
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
