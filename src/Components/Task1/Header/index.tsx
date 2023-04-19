import s from "./style.module.scss";
import userAvatar from "../../../image/header/UserAvatar.png";
import { Icon1 } from "../../../image/svg/Icon1";
import { Icon2 } from "../../../image/svg/Icon2";
import { Icon3 } from "../../../image/svg/Icon3";
import { useState } from "react";

let Header = () => {
  const [activeBtn, setActiveBtn] = useState<string>("navEl1");

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.side1}>
          <div className={s.logo}>
            <p>Портал Разработчика</p>
          </div>
          <div className={s.nav}>
            <ul>
              <li
                id="navEl1"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  setActiveBtn(e.currentTarget.id);
                }}
                className={activeBtn === "navEl1" ? s.active : ""}
              >
                Мое обучение
              </li>
              <li
                id="navEl2"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  setActiveBtn(e.currentTarget.id);
                }}
                className={activeBtn === "navEl2" ? s.active : ""}
              >
                Задачи
              </li>
            </ul>
          </div>
        </div>

        <div className={s.links}>
          <div className={s.btns}>
            <button>
              <Icon2 />
            </button>
            <button>
              <Icon1 />
            </button>
            <button>
              <Icon3 />
            </button>
          </div>

          <div className={s.headerLogin}>
            <img src={userAvatar} alt="" />
            <p>Михаил Романов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
