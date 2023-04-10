import ScrollMagic from 'scrollmagic';
import { TweenMax } from 'gsap';

const parallax = () => {
  const controller = new ScrollMagic.Controller();

  // Create parallax scene for background
  const parallaxScene = new ScrollMagic.Scene({
    triggerElement: '#parallax',
    triggerHook: 1,
    duration: '100%',
  })
    // .setTween(TweenMax.from('.parallax-bg', 1, { y: '-50%', ease: Power0.easeNone }))
    .addTo(controller);

  // Create parallax scene for content

  const contentScene = new ScrollMagic.Scene({
    triggerElement: '#parallax',
    triggerHook: 0.5,
    duration: '100%',
  })
    // .setTween(TweenMax.from('.parallax-content', 1, { opacity: 0, y: '50px', ease: Power0.easeNone }))
    .addTo(controller);
};

export default parallax;