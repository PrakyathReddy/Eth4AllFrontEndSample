import styles from "./SubscribeWidget1.module.css";

const SubscribeWidget1 = () => {
  return (
    <div className={styles.subscribeWidget}>
      <div className={styles.photo} />
      <div className={styles.headlineSubheadWrapper}>
        <div className={styles.headlineSubhead}>
          <div className={styles.nameOfPaper}>
            NAME of Paper given by owner....
          </div>
          <div className={styles.descriptionByOwner}>
            Description BY Owner......
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeWidget1;
