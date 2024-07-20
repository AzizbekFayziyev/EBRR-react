import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import { ChevronsRight } from "lucide-react";
import Translation, { TranslationMethod } from "../UI/Translation";
import { AppContext } from "@/context";
import { postForm } from "@/services";

const Contact = () => {
  const { translations, currentLang } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await postForm(name, email, message).then(() => {
      setName("");
      setEmail("");
      setMessage("");
    });

    console.log(res);

    alert(TranslationMethod("alertMessages.form", translations, currentLang));
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="wrapperBorderedContent py-20">
        <div className={styles.content}>
          <form onSubmit={onSubmit} className={styles.form}>
            <Title subtitle={<Translation keyCode="form.subtitle" />}>
              <Translation keyCode="form.title" />
            </Title>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder={TranslationMethod(
                "form.name",
                translations,
                currentLang
              )}
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder={TranslationMethod(
                "form.email",
                translations,
                currentLang
              )}
            />

            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              placeholder={TranslationMethod(
                "form.message",
                translations,
                currentLang
              )}
            />

            <Button>
              <Translation keyCode="form.button" /> <ChevronsRight />
            </Button>
          </form>

          <div className={styles.info}>
            <h2>
              <Translation keyCode="contact.title" />
            </h2>

            <div className={styles.infoItems}>
              {/* <div className={styles.itemFlex}>
                <div className={styles.item}>
                  <h5>
                    <Translation keyCode="contact.addressTitle" />
                  </h5>
                  <h6>
                    <Translation keyCode="contact.address" />
                  </h6>
                </div>
              </div> */}

              <div className={styles.item}>
                <h5>
                  <Translation keyCode="contact.addressTitle2" />
                </h5>
                <h6>
                  <Translation keyCode="contact.address2" />
                </h6>
              </div>

              <div className={styles.itemFlex}>
                <div className={styles.item}>
                  <h5>
                    <Translation keyCode="contact.email" />
                  </h5>
                  <a
                    href={`mailto:${TranslationMethod(
                      "contacts.email",
                      translations,
                      currentLang
                    )}`}
                  >
                    <Translation keyCode="contacts.email" />
                  </a>
                </div>

                <div className={styles.item}>
                  <h5>
                    <Translation keyCode="contact.email" />
                  </h5>
                  <a
                    href={`mailto:${TranslationMethod(
                      "contacts.email",
                      translations,
                      currentLang
                    )}`}
                  >
                    <Translation keyCode="contacts.email2" />
                  </a>
                </div>
              </div>

              <div className={styles.itemFlex}>
                <div className={styles.item}>
                  <h5>
                    <Translation keyCode="contact.tel" />
                  </h5>
                  <a
                    className="whitespace-nowrap"
                    href={`tel:${TranslationMethod(
                      "contacts.phone",
                      translations,
                      currentLang
                    )}`}
                  >
                    <Translation keyCode="contacts.phone" />
                  </a>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1876810908425!2d28.987188999999994!3d41.064890000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab71d37db2def%3A0x334c263fa2b6bf4b!2zRDogNjQsIE1lcmtleiwgQWJpZGUtaSBIw7xycml5ZXQgQ2QgTm86MjExLCAzNDM4MSDFnmnFn2xpL8Swc3RhbmJ1bCwgVMO8cmtpeWU!5e0!3m2!1sen!2s!4v1721112929078!5m2!1sen!2s"
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
