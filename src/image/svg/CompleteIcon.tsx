import React from "react";

interface CompleteIconAttributes {
  className?: string;
}

export const CompleteIcon: React.FC<CompleteIconAttributes> = ({
  className = "",
}: CompleteIconAttributes) => {
  return (
    <svg

      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#22C38E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7988 14.4172L7.12386 11.0792L5.77914 12.5597L10.9938 17.2962L18.733 8.07302L17.2009 6.78745L10.7988 14.4172Z"
        fill="white"
      />
    </svg>
  );
};
