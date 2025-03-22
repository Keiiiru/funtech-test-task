import { useRef } from "react";
import "./index.sass";
import gsap from "gsap";
import firstImage from "../../../../assets/images/first-image.jpeg";
import secondImage from "../../../../assets/images/second-image.jpeg";
import { ArrowIcon } from "../../../../assets/icons/ArrowIcon";
import { DotsIcon } from "../../../../assets/icons/DotsIcon";
import { useGSAP } from "@gsap/react";

const HeroAnimatedBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              containerRef.current,
              {
                x: "100%",
                autoAlpha: 0,
              },
              {
                x: "0%",
                autoAlpha: 1,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
                onComplete: () => {
                  gsap.to(arrowRef.current, {
                    autoAlpha: 1,
                    duration: 0.5,
                    ease: "power2.out",
                  });
                },
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="hero-animated-banner"
      ref={containerRef}
      style={{ opacity: 0 }}
    >
      <img
        src={firstImage}
        className="hero-animated-banner__first-image"
        alt="first-image"
      />
      <img
        src={secondImage}
        className="hero-animated-banner__second-image"
        alt="second-image"
      />
      <ArrowIcon
        className="hero-animated-banner__arrow-icon"
        ref={arrowRef}
        style={{ opacity: 0 }}
      />
      <DotsIcon className="hero-animated-banner__dots-icon" />
    </div>
  );
};

export default HeroAnimatedBanner;
