import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Image1 from '../images/lifting-pic.jpg';
import Image2 from '../images/rope-pic.jpg';
import Image3 from '../images/trainer-pic.jpg';
import Image4 from '../images/bicep-curl.jpeg';
import Image5 from '../images/crunches.jpeg';
import Image6 from '../images/kettlebell.jpeg';

const items = [
  {
    src: Image1,
    altText: 'Slide 1',
    caption: 'Custom Workouts'
  },
  {
    src: Image2,
    altText: 'Slide 2',
    caption: 'Accountability'
  },
  {
    src: Image3,
    altText: 'Slide 3',
    caption: 'Communicate'
  },
  {
    src: Image4,
    altText: 'Slide 4',
    caption: 'Dedication'
  },
  {
    src: Image5,
    altText: 'Slide 5',
    caption: 'Resilience'
  },
  {
    src: Image6,
    altText: 'Slide 6',
    caption: 'Community'
  }   
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example;