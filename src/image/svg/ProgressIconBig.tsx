import React, { useEffect, useState } from "react";
import s from "./ProgressIcon.module.scss";

interface SearchIconAttributes {
  progress?: number;
  countTask?: number;
}

export const ProgressIconBig: React.FC<SearchIconAttributes> = ({
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
width="154" height="154" viewBox="0 0 154 154">
    <circle cx="77" cy="77" r="69.3" fill="none" stroke="rgba(19, 147, 222, 0.08)" strokeWidth="16" />
    <circle className={s.percent} cx="77" cy="77" r="69.3" fill="none" stroke="rgba(36, 195, 142, 1)" strokeWidth="16" pathLength="100" />
</svg>
    </div>

  );
};
