declare module "react-slick" {
  import { Component } from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    arrows?: boolean;
    nextArrow?: JSX.Element;
    prevArrow?: JSX.Element;
    responsive?: Array<{
      breakpoint: number;
      settings: Settings;
    }>;
    [key: string]: any; // Дополнительные параметры
  }

  export default class Slider extends Component<Settings> {}
}
