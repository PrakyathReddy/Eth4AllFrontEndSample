import { useCallback } from "react";
import OwnerPaperContainer from "../components/OwnerPaperContainer";
import styles from "./SubscribeWidget5.module.css";

const SubscribeWidget5 = () => {
  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className={styles.subscribeWidget}>
      <div className={styles.photo} />
      <OwnerPaperContainer onButtonContainerClick={onButtonContainerClick} />
    </div>
  );
};

export default SubscribeWidget5;
