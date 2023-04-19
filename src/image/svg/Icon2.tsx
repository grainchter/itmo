interface SearchIconAttributes {
  className?: string;
}

export const Icon2: React.FC<SearchIconAttributes> = ({
  className,
}: SearchIconAttributes) => {


  return (
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9C15.4477 9 15 9.44772 15 10C15 10.042 15.0026 10.0834 15.0076 10.1241C13.2785 10.5655 12 12.1334 12 14V17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17V14C20 12.1334 18.7215 10.5655 16.9924 10.1241C16.9974 10.0834 17 10.042 17 10C17 9.44772 16.5523 9 16 9Z" fill="#00395C" fillOpacity="0.8"/>
<path d="M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20H18Z" fill="#00395C" fillOpacity="0.8"/>
</svg>
  );
};
