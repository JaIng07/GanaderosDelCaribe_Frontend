import { useSnackbar } from "notistack";

let useSnackbarRef;
export const SnackbarUtilsConfigurator = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export default {
  success(msg) {
    console.log("success", msg)
    this.toast(msg, "success");
  },
  warning(msg) {
    this.toast(msg, "warning");
  },
  info(msg) {
    this.toast(msg, "info");
  },
  error(msg) {
    this.toast(msg, "error");
  },
  toast(msg, variant = "default") {
    console.log("toast", msg, variant)
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
};