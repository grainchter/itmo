import Header from "./Header";
import Main from "./Main";
import s from "./style.module.scss";

let Task1 = () => {
  return (
    <div className={s.container}>
      <Header />
      <Main />
    </div>
  );
};

export default Task1;
