"use client";

import { sileo } from "sileo";
import type { SileoState, SileoPosition } from "sileo";

// Use CSS variable that adapts to dark mode
const fillColor = "var(--toast-fill, #171717)";

export interface ToastOptions {
  title: string;
  description?: string;
  state?: SileoState;
  duration?: number;
  position?: SileoPosition;
  id?: string;
}

export const toast = {
  success: (options: Omit<ToastOptions, "state">) =>
    sileo.show({
      title: options.title,
      description: options.description,
      fill: fillColor,
      state: "success",
      styles: { description: "text-white" },
    } as never),

  error: (options: Omit<ToastOptions, "state">) =>
    sileo.show({
      title: options.title,
      description: options.description,
      fill: fillColor,
      state: "error",
      styles: { description: "text-white" },
    } as never),

  warning: (options: Omit<ToastOptions, "state">) =>
    sileo.show({
      title: options.title,
      description: options.description,
      fill: fillColor,
      state: "warning",
      styles: { description: "text-white" },
    } as never),

  info: (options: Omit<ToastOptions, "state">) =>
    sileo.show({
      title: options.title,
      description: options.description,
      fill: fillColor,
      state: "info",
      styles: { description: "text-white" },
    } as never),

  loading: (options: Omit<ToastOptions, "state">) =>
    sileo.show({
      title: options.title,
      description: options.description,
      fill: fillColor,
      state: "loading",
      styles: { description: "text-white" },
    } as never),

  show: (options: ToastOptions) => sileo.show(options as never),
};
