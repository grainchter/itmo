import React, { useEffect, useState } from "react";
import s from "./ProgressIcon.module.scss";

interface SearchIconAttributes {
  progress?: number;
  countTask?: number;
}

export const ProgressIcon: React.FC<SearchIconAttributes> = ({
  progress,
  countTask,
}: SearchIconAttributes) => {

    const [percent, setPercent] = useState<number>(0);

    let calculatePercent = () => {
        let res:number;
        if (progress && countTask) {
         res = (progress * 100) / countTask;
        setPercent(res);
        }
    }

    useEffect(() => {
        calculatePercent();
      });

  return (
    <div className={s.svg}>
<svg
    style={{ "--val": percent } as React.CSSProperties}
width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10.8" fill="none" stroke="rgba(0, 32, 51, 0.08)" strokeWidth="2" />
    <circle className={s.percent} cx="12" cy="12" r="10.8" fill="none" stroke="rgba(36, 195, 142, 1)" strokeWidth="2" pathLength="100" />
</svg>
    </div>

  );
};
