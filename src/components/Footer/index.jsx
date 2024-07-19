import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button";
import Translation, { TranslationMethod } from "../UI/Translation";
import { AppContext } from "@/context";
import { postForm } from "@/services";

const Footer = () => {
  const { translations, currentLang } = useContext(AppContext);
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await postForm("no name", email, "get subscriber").then(() => {
      setEmail("");
    });

    console.log(res);

    alert(
      TranslationMethod(
        "alertMessages.getSubscriber",
        translations,
        currentLang
      )
    );
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav}>
          <div className={styles.navItem}>
            <img src="/logo.svg" width={120} height={50} alt="logo" />
            <p>
              <Translation keyCode="footer.title" />
            </p>
          </div>

          <div className={styles.navItem}>
            <h3>
              <Translation keyCode="footer.menu1" />
            </h3>
            <ul>
              <li>
                <a href="#">
                  <Translation keyCode="navbar.link1" />
                </a>
              </li>

              <li>
                <a href="#about">
                  <Translation keyCode="navbar.link2" />
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
          </div>

          <div className={styles.navItem}>
            <h3>
              <Translation keyCode="footer.menu2" />
            </h3>
            <ul>
              <li>
                <a
                  href={`tel:${TranslationMethod(
                    "contacts.phone",
                    translations,
                    currentLang
                  )}`}
                >
                  <Translation keyCode="contacts.phone" />
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${TranslationMethod(
                    "contacts.email",
                    translations,
                    currentLang
                  )}`}
                >
                  <Translation keyCode="contacts.email" />
                </a>
              </li>

              <li>
                <Translation keyCode="contact.address2" />
              </li>
            </ul>
          </div>

          <div className={styles.navItem}>
            <form onSubmit={onSubmit} className={styles.form}>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={TranslationMethod(
                  "form.email",
                  translations,
                  currentLang
                )}
              />
              <Button>
                <Translation keyCode="footer.subscribe" />
              </Button>
            </form>
          </div>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <h3>
          <Translation keyCode="footer.bottom" />
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
