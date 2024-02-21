import Styles from "@Styles/common/Loader.module.scss";

const Loader = () => {
  return (
    <div className={Styles.loaderContainer}>
      <div className={Styles.h2Proxy}>
        {" "}
        <div className={Styles.animatedElement} />
      </div>
      <div className={Styles.pProxy}>
        <div className={Styles.animatedElement} />
      </div>
      <div className={Styles.lineProxy}>
        <div className={Styles.animatedElement} />
      </div>
    </div>
  );
};

export default Loader;
