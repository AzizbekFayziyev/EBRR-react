import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ArrowLeft, ArrowRight, ChevronDown, Phone } from "lucide-react";
import Button from "../UI/Button";
import { getSlides } from "../../services";
import Translation from "../UI/Translation";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slides, setSlides] = useState([]);

  // Fetching slies
  useEffect(() => {
    const getAllSlides = async () => {
      const res = await getSlides();

      setSlides(res);
    };

    getAllSlides();
  }, []);

  // slide control
  const handleControl = (direction) => {
    if (direction === "right") {
      if (slides.length > currentSlide) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        setCurrentSlide(1);
      }
    } else {
      if (currentSlide !== 1) {
        setCurrentSlide((prev) => prev - 1);
      } else {
        setCurrentSlide(slides.length);
      }
    }
  };

  // Auto slide
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (slides.length > currentSlide) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(1);
      }
    }, 5500);

    return () => {
      clearInterval(autoSlide);
    };
  }, [currentSlide, slides]);

  return (
    <div className="relative">
      <div className="wrapperBordered px-2">
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.slides}>
            {slides?.map((slide, id) => (
              <img
                key={slide.id}
                className={`${currentSlide === id + 1 ? styles.active : ""} absolute w-full h-full left-0 top-0 `}
                src={import.meta.env.VITE_PUBLIC_IMAGE_URL + slide.photo}
                alt={"slide photo"}
              />
            ))}
          </div>

          <div className={styles.content}>
            <h1>
              <Translation keyCode="header.title" />
            </h1>

            <div className={styles.buttons}>
              <a href="#contact">
                <Button>
                  <Translation keyCode="header.contactBtn" />
                  <Phone size={20} fill="#fff" />
                </Button>
              </a>

              <a href="#about">
                <Button isPrimary={false}>
                  <Translation keyCode="header.aboutBtn" />
                </Button>
              </a>
            </div>
          </div>
        </header>
      </div>

      <div className={styles.carouselController}>
        <a href="#about" className={styles.down}>
          <div>
            <ChevronDown size={30} />
          </div>
        </a>

        <div className={styles.item}>
          <div className={styles.pagination}>
            {slides.map((e, id) => (
              <div
                className={currentSlide === id + 1 ? styles.active : ""}
                key={id}
              >
                <span />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.arrows}>
            <button onClick={() => handleControl("left")}>
              <ArrowLeft size={25} />
            </button>
            <button onClick={() => handleControl("right")}>
              <ArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
