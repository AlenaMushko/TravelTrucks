import { useDispatch } from "react-redux";
import { addNotification } from "@/store/slices/notificationSlice";
import type { NotificationType } from "@/store/slices/notificationSlice";

export const useNotification = () => {
  const dispatch = useDispatch();

  const showNotification = (message: string, type: NotificationType) => {
    dispatch(addNotification({ message, type }));
  };

  return {
    showSuccess: (message: string) => showNotification(message, "success"),
    showError: (message: string) => showNotification(message, "error"),
    showInfo: (message: string) => showNotification(message, "info"),
    showWarning: (message: string) => showNotification(message, "warning"),
    showNotification,
  };
};
