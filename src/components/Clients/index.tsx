import { API, Client } from "api";
import ClientCard from "components/ClientCard";
import Loading from "components/Loading";
import Section from "components/Section";
import { useEffect, useState } from "react";
import styles from "./Clients.module.css";

// logo
import apple from "assets/images/apple.png";
import amazon from "assets/images/amazon.png";
import microsoft from "assets/images/microsoft.png";
import google from "assets/images/google.png";
import facebook from "assets/images/facebook.png";
import nike from "assets/images/nike.png";
import intel from "assets/images/intel.png";
import mercedesBenz from "assets/images/mercedesBenz.png";
import cocaCola from "assets/images/cocaCola.png";
import mcDonald from "assets/images/mcDonald.png";
import samsung from "assets/images/samsung.png";
import toyota from "assets/images/toyota.png";
import americanExpress from "assets/images/americanExpress.png";
import bmw from "assets/images/bmw.png";
import disney from "assets/images/disney.png";

export default function Clients() {
  const [clients, setClients] = useState<Client[]>();
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    // this is an IIFE for fetching data from the api file
    (async () => {
      try {
        setloading(true);
        const res = await API.requestClients();
        setClients(res);
      } catch (error) {
        console.log("there is a problem");
      } finally {
        setloading(false);
      }
    })();
  }, []);

  // a function for return proper logo by name
  const findLogo = (name: string): string => {
    switch (name) {
      case "Apple":
        return apple;
      case "Amazon":
        return amazon;
      case "Microsoft":
        return microsoft;
      case "Google":
        return google;
      case "Samsung":
        return samsung;
      case "Coca-Cola":
        return cocaCola;
      case "Toyota":
        return toyota;
      case "Mercedes-Benz":
        return mercedesBenz;
      case "McDonald’s":
        return mcDonald;
      case "Disney":
        return disney;
      case "BMW":
        return bmw;
      case "Intel":
        return intel;
      case "NIKE":
        return nike;
      case "American Express":
        return americanExpress;
      case "Facebook":
        return facebook;

      default:
        return "";
    }
  };

  return (
    <Section header="Clients">
      <div className={styles.client}>
        {loading ? (
          <Loading />
        ) : (
          clients?.map((client) => (
            <div className={styles.cardWrapper} key={client.id}>
              <ClientCard {...client} logo={findLogo(client.name)} />
            </div>
          ))
        )}
      </div>
    </Section>
  );
}
