import { Campaign } from "api";
import styles from "./CampaignCard.module.css";
import { FcApproval } from "react-icons/fc";

export default function CampaignCard({
  name,
  type,
  client,
  budget,
  campaignManager,
  startDate,
  endDate
}: Campaign) {
  // this function converts Campaign enum number to a proper string
  const typeToString = () =>
    type === 0 ? "SOCIAL_MEDIA" : type === 1 ? "SEARCH_ENGINE" : "TV";

  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <FcApproval size={24} />
        <span>{name}</span>
      </header>

      <div className={styles.body}>
        <div className={styles.client}>Client: {client.name}</div>
        <div className={styles.budget}>
          Budget:{" "}
          {budget.toLocaleString("no-NO", {
            style: "currency",
            currency: "NOK"
          })}
        </div>

        <div className={styles.manager}>Manager: {campaignManager.name}</div>
        <div className={styles.date}>
          <div>From: {startDate}</div>
          <div>To: {endDate}</div>
        </div>
        <footer className={styles.tag}>#{typeToString()}</footer>
      </div>
    </section>
  );
}
