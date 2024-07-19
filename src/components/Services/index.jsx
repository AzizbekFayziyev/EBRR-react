import Title from "@/components/UI/Title";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ServiceItem from "./ServiceItem";
import Translation from "../UI/Translation";
import { getServices } from "../../services";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getAllServices = async () => {
      const res = await getServices();

      setServices(res);
    };

    getAllServices();
  }, []);

  return (
    <section id="services" className={styles.services}>
      <div className="wrapperBorderedContent pt-20">
        <Title
          align="text-center"
          subtitle={<Translation keyCode="services.subtitle" />}
        >
          <Translation keyCode="services.title" />
        </Title>

        <div className={styles.cards}>
          {services?.map((service) => (
            <ServiceItem
              service={service}
              img={import.meta.env.VITE_PUBLIC_IMAGE_URL}
              key={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
