import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Title from "@/components/UI/Title";
import AdvantageItem from "./AdvantageItem";
import Translation from "../UI/Translation";
import { getAdvantages } from "../../services";

export default function Advantages() {
  const [advantages, setAdvantages] = useState([]);

  useEffect(() => {
    const getAllAdvantages = async () => {
      const res = await getAdvantages();

      setAdvantages(res);
    };

    getAllAdvantages();
  }, []);

  return (
    <section id="advantages" className={styles.advantages}>
      <div className="wrapperBorderedContent sm:pt-80 pt-20">
        <div className="wrapperInside">
          <Title subtitle={<Translation keyCode="advantages.subtitle" />}>
            <Translation keyCode="advantages.title" />
          </Title>

          <div className={styles.cards}>
            {advantages?.map((advantage, id) => (
              <AdvantageItem key={advantage.id} advantage={advantage} id={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
