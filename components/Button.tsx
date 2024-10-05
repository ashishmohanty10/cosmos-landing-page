import React from "react";

interface ButtonProps {
  text: string;
  size: "md" | "large";
  active: boolean;
}

const Button = ({ text, size, active }: ButtonProps) => {
  return (
    <>
      <div className="relative group cursor-pointer">
        <div>
          <svg
            className={`group-hover:fill-white transition-all ${
              size === "md" ? "h-full w-[150px]" : "h-full"
            } ${active === true ? "fill-white group-hover:fill-none" : ""}`}
            width="194"
            height="57"
            fill="none"
            viewBox="0 0 194 57"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_0_398)">
              <path
                d="M21.5 51H1V47.5V6.5H159.5H159.795L160.043 6.33957L168.295 1H184.5H193L193 55.5H29.7619L21.9902 51.1284L21.7619 51H21.5Z"
                stroke="white"
                stroke-width="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_0_398"
                x="-34"
                y="-34"
                width="262"
                height="124.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="17" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_0_398"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_0_398"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <p
          className={`font-extrabold group-hover:text-black transition-all text-center ${
            size === "md"
              ? "absolute top-3 right-12"
              : "absolute top-8 right-0 -translate-x-1/2 -translate-y-1/2"
          } ${active === true ? "text-black group-hover:text-white" : ""}`}
        >
          {text}
        </p>
      </div>
    </>
  );
};

export default Button;
