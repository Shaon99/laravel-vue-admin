// utils.js
import { format } from "date-fns";

export const formatDate = (date) => {
  return format(new Date(date), "dd MMM, yyyy");
};

export const getStatusClass = (status) => {
  return status === 1
    ? "bg-green-100 text-green-800"
    : "bg-red-100 text-red-800";
};

export const getStatusText = (status) => {
  return status === 1 ? "Active" : "Inactive";
};

