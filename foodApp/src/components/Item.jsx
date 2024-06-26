import styles from "./item.module.css";
export default function Item({ items }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageConatiner}>
          {" "}
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + items.image
            }
            alt=""
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{items.name}</div>
          <div className={styles.amount}>
            <span>{items.amount}</span>
            <span> {items.unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
