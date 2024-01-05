import { toast } from "sonner";
export const ToastAr: string[] = ["success", "error", "warning"];
export type typeToast = "success" | "error" | "warning" | "action";
export const notificationToast = (
  message: string | undefined,
  type: typeToast
) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warning":
      toast.warning(message);
    case "action":
      toast.warning(message, {
        action: {
          label: "abc",
          onClick: () => {
            console.log("abc");
          },
        },
      });
      break;
    default:
      return;
  }
};
