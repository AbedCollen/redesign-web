import { toast } from 'react-toastify';

export const notify = {
  show: (message: React.ReactNode) => toast(message, {
    position: toast.POSITION.TOP_RIGHT
  }),

  success: (message: React.ReactNode) => toast.success(message, {
    position: toast.POSITION.TOP_RIGHT
  }),

  error: (message: React.ReactNode) => {
    if (message instanceof Error) {
      toast.error(message.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    console.error(message);
  },

  warn: (message: React.ReactNode) => {
    toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT
    });
    console.warn(message);
  },

  info: (message: React.ReactNode) => {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT
    });
    // eslint-disable-next-line no-console
    console.info(message);
  }
};
