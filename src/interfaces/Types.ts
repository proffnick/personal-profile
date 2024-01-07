import React from "react";

export type ContentProp = {
  title: String,
  content: string
  subTitle?: string,
  pdf?: any,
  ref?: Ref
}

export type Ref = HTMLDivElement;

export type PortfolioProp = {
  title: String,
  content: string
  subTitle?: string,
  image: any,
  iosLink?: string,
  androidLink?: string,
  isLast?: boolean,
  index: number,
  ref?: Ref,
  is_app?: boolean
}
