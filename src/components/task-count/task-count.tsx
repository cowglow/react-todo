import {Avatar, Chip} from "@mui/material";

// @ts-ignore
import styles from "./task-count.module.css";

// @ts-ignore
const TaskCount = ({ count }) => (
  <div className={styles.root} aria-label="List count">
    {count ? (
      <Chip
        avatar={<Avatar>{count}</Avatar>}
        color="primary"
        label="things to do."
      />
    ) : (
      <Chip label={"Nothing to do"} color="primary" variant="outlined" />
    )}
  </div>
);

export default TaskCount;
