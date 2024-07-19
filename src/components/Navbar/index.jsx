import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { CircleX, Menu } from "lucide-react";
import { AppContext } from "@/context";
import Translation, { TranslationMethod } from "../UI/Translation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { currentLang, setLang, translations } = useContext(AppContext);

  const handleChangeLang = (lang) => {
    localStorage.setItem("lang", lang);

    setLang(lang);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className="wrapper">
          <div className={styles.content}>
            <ul className={styles.links}>
              <img src="/logo.svg" width={120} height={50} alt="logo" />

              <li>
                <a href="#about">
                  <Translation keyCode="navbar.link2" />
                </a>
              </li>

              <li>
                <a href="#advantages">
                  <Translation keyCode="navbar.link5" />
                </a>
              </li>

              <li>
                <a href="#services">
                  <Translation keyCode="navbar.link3" />
                </a>
              </li>

              <li>
                <a href="#contact">
                  <Translation keyCode="navbar.link4" />
                </a>
              </li>
            </ul>

            <div className={styles.actions}>
              <a
                href={`tel:${TranslationMethod(
                  "contacts.phone",
                  translations,
                  currentLang
                )}`}
              >
                <Translation keyCode="contacts.phone" />
              </a>

              <div className={styles.divider} />

              <div className={styles.langs}>
                <button
                  onClick={() => handleChangeLang("tr")}
                  className={currentLang === "tr" ? styles.active : ""}
                >
                  Türk
                </button>

                <button
                  onClick={() => handleChangeLang("en")}
                  className={currentLang === "en" ? styles.active : ""}
                >
                  Eng
                </button>
              </div>

              <button
                onClick={() => setMenu((prev) => !prev)}
                className={styles.menu}
              >
                {!menu ? <Menu size={38} /> : <CircleX size={38} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav
        className={`${styles.mobileMenu} ${
          menu ? "scale-100 visible" : "scale-0 invisible"
        }`}
      >
        <ul onClick={() => setMenu(false)}>
          <li>
            <a href="#about">
              <Translation keyCode="navbar.link2" />
            </a>
          </li>

          <li>
            <a href="#advantages">
              <Translation keyCode="navbar.link5" />
            </a>
          </li>

          <li>
            <a href="#services">
              <Translation keyCode="navbar.link3" />
            </a>
          </li>

          <li>
            <a href="#contact">
              <Translation keyCode="navbar.link4" />
            </a>
          </li>
        </ul>

        <div className={styles.langs}>
          <button
            onClick={() => handleChangeLang("tr")}
            className={currentLang === "tr" ? styles.active : ""}
          >
            Türk
          </button>

          <button
            onClick={() => handleChangeLang("en")}
            className={currentLang === "en" ? styles.active : ""}
          >
            Eng
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
