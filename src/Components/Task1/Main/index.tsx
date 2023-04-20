import s from "./style.module.scss";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";

let Main = () => {
  return (
    <>
      <div className={s.container}>
        <Block1 />
        <Block2 />
        <Block3 />
      </div>
    </>
  );
};

export default Main;
