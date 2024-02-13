"use client";

import { css, useTheme } from "@emotion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const base = (theme: any) =>
  css({
    backgroundColor: theme.color.blue,
  });

export const Button = ({ children }: ButtonProps) => {
  const theme = useTheme();
  console.log(theme);
  return (
    // @ts-ignore
    <button css={base} onClick={() => null}>
      {children}
    </button>
  );
};
