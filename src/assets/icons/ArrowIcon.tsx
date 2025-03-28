import React from "react";

type ArrowIconProps = {
  className?: string;
} & React.SVGProps<SVGSVGElement>; // Добавляем стандартные SVG пропсы

export const ArrowIcon = React.forwardRef<SVGSVGElement, ArrowIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="61"
        height="63"
        viewBox="0 0 61 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        ref={ref} // Правильно привязываем ref
        {...props} // Передаем остальные SVG пропсы
      >
        <path
          d="M7.36566 20.2721C15.0277 14.5338 23.9483 11.0122 33.4024 13.5769C41.9357 15.8918 47.3082 23.1646 41.5544 32.1589C38.8307 36.4166 33.0315 39.3967 28.4729 36.9714C23.3942 34.2694 27.3972 27.4497 30.6484 25.4829C38.242 20.8893 48.9304 23.0244 54.1875 31.9467C60.4131 42.5128 49.884 47.7719 49.8768 47.6862"
          stroke="black"
          strokeWidth="1.54253"
          strokeMiterlimit="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.01835 8.89929C9.29647 10.0061 9.13589 11.1141 9.02657 12.2297C8.66794 15.8926 7.23199 19.6956 4.65549 22.098C8.04583 20.6114 12.9098 19.964 15.9891 22.5734"
          stroke="black"
          strokeWidth="1.54253"
          strokeMiterlimit="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ArrowIcon.displayName = "ArrowIcon"; // Добавляем displayName для удобства отладки
