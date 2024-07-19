import React, { useContext } from "react";
import styles from "./styles.module.scss";
import Title from "@/components/UI/Title";
import { ChevronsRight, Phone } from "lucide-react";
import { AppContext } from "@/context";
import Translation, { TranslationMethod } from "../UI/Translation";

const About = () => {
  const { currentLang, translations } = useContext(AppContext);
  return (
    <section id="about" className={styles.about}>
      <div className="wrapperBorderedContent sm:pt-20 pt-10">
        <div className="wrapperInside">
          <Title subtitle={<Translation keyCode="about.subtitle" />}>
            <Translation keyCode="about.title" />
          </Title>

          <p className={styles.description}>
            <Translation keyCode="about.desc" />
          </p>

          <img
            className={styles.heroMobile}
            src="/aboutBg.png"
            width={500}
            height={500}
            alt="about image"
          />

          <div className={styles.cards}>
            <div className={styles.card}>
              <span>5+</span>
              <p>
                {" "}
                <Translation keyCode="about.card1" />
              </p>
            </div>

            <div className={styles.card}>
              <span>45+</span>
              <p>
                {" "}
                <Translation keyCode="about.card2" />
              </p>
            </div>

            <div className={styles.card}>
              <span>5+</span>
              <p>
                {" "}
                <Translation keyCode="about.card3" />
              </p>
            </div>

            <a
              href={`tel:${TranslationMethod(
                "contacts.phone",
                translations,
                currentLang
              )}`}
              className={`${styles.card}`}
            >
              <span>
                <Translation keyCode="about.card4" />
                <ChevronsRight size={20} />
              </span>

              <Phone size={30} color="transparent" fill="#fff" />
            </a>
          </div>

          <div className={styles.hero}>
            <img
              src="/aboutBg.png"
              width={500}
              height={500}
              alt="about image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
