import { API, Campaign } from "api";
import CampaignCard from "components/CampaignCard";
import Loading from "components/Loading";
import Section from "components/Section";
import { useEffect, useState } from "react";
import styles from "./Campaigns.module.css";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>();
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    // this is an IIFE for fetching data from the api file
    (async () => {
      try {
        setloading(true);
        const res = await API.requestCampaigns();
        setCampaigns(res);
      } catch (error) {
        console.log("there is a problem");
      } finally {
        setloading(false);
      }
    })();
  }, []);

  return (
    <Section header="Campaigns">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className="flex px-2 py-1 text-coolGray-700 cursor-pointer rounded-full bg-cyan-500 mb-2 ml-auto text-xs"
            onClick={() => {
              const temp = campaigns && [...campaigns];
              setCampaigns(
                temp?.sort((a, b) => {
                  if (a.name < b.name) return -1;
                  if (a.name > b.name) return 1;
                  return 0;
                })
              );
            }}
          >
            Alphabetic Sort
          </div>

          <div className={styles.campaigns}>
            {campaigns?.map((campaign) => (
              <div className={styles.cardWrapper} key={campaign.id}>
                <CampaignCard {...campaign} />
              </div>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
