import { PureComponent } from "react";
import Link from "next/link";
import Slider from "react-slick";

import "../styles/main.scss";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  variableWidth: true,
  swipeToSlide: true
};

export default class SliderBug extends PureComponent {
  render() {
    return (
      <Slider {...sliderSettings}>
        {["ABC", "DEF", "GHI", "JKL"].map(i => (
          <div key={i} value={i}>
            <Link href="/">
              <span className="slide-item">{i}</span>
            </Link>
          </div>
        ))}
      </Slider>
    );
  }
}
