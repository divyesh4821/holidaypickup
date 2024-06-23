// ToastNotification.js
import { toast } from 'react-hot-toast';

const ToastNotification = ({ message, type }) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
      break;
  }
  
  return null; // Return null because this component doesn't render any visible UI
};

export default ToastNotification;
