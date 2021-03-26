import styles from "./Section.module.css";

interface Props {
  header: string;
  children: React.ReactNode;
}

export default function Section({ header, children }: Props) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>{header}</header>
      <hr />
      {children}
    </section>
  );
}
