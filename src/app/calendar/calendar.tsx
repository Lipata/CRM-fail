import styles from './calendar.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Calendar() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout calendar-container")}>
        <div className={classes("column-layout demo-content")}>
          <img src="/src/assets/start-building.svg" className={classes("image")} />
          <h5 className={classes("h5")}>
            <span>Start building!</span>
          </h5>
          <p className={classes("typography__body-1 text")}>
            <span>Remove the "demo-content" container, and add your own content.</span>
          </p>
        </div>
      </div>
    </>
  );
}
