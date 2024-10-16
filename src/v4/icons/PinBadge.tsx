import React from 'react';

export const PinBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="30"
      fill="none"
      viewBox="0 0 29 30"
      {...props}
    >
      <path
        fill={props.fill}
        d="M18.106 16.436c.575 1.547.53 3.27-.596 4.398a.74.74 0 01-1.06 0l-3.006-3.005-2.32 2.32c-.022.022-.067.022-.089.044l-1.59.53c-.2.067-.398-.132-.332-.331l.53-1.591.066-.066 2.32-2.32-3.005-3.006a.722.722 0 010-1.06c1.105-1.105 2.829-1.194 4.376-.62l2.917-2.342-.929-.928a.722.722 0 010-1.06l1.061-1.06a.74.74 0 011.06 0l6.011 6.01a.76.76 0 010 1.06l-1.06 1.06a.74.74 0 01-1.061 0l-.95-.95-2.343 2.917z"
      ></path>
    </svg>
  );
};
