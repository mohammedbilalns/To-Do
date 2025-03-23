import styles from "./todoitem.module.css";

export default function TodoItem({ item }: { item: string }) {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>{item}</div>
        <button className={styles.deleteButton}>X</button>
      </div>
      <hr className={styles.line} />
    </>
  );
}
