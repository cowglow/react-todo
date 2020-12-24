/** Domain  **/

type Task = {
  key: number;
  label: string;
  isChecked: boolean;
};

/** Application **/

type DrawerState = boolean;

type TaskFilter = "all" | "active" | "completed";
