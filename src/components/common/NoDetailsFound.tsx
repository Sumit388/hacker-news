import Styles from "@Styles/common/NoDetailsFound.module.scss";

const NoDetailsFound = () => {
  return (
    <div className={Styles.noDetailsContainer}>
      <p>
        No details found for your Query. Please update your query or try again
        later.
      </p>
    </div>
  );
};

export default NoDetailsFound;
