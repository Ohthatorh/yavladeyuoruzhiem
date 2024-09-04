"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./notification.scss";
import { FC } from "react";

export const Notification: FC = () => {
  return <ToastContainer stacked />;
};
