import { toast } from 'react-toastify';

export const notificationInfo = name =>
  toast.info(`${name} is already in the phonebook with the same number`, {
    autoClose: 2500,
  });

export const notificationError = () => {
  toast.error('Oops... Something went wrong :( Try again!');
};
