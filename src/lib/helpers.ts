import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export function cn(...args: any) {
  return twMerge(classNames(args));
}

export function handleStreamingContent(content: any) {
  // Update your UI with the new content
  // This could be appending to a text area, updating state, etc.
  const responseElement = document.getElementById("streaming-response");
  if (responseElement) {
    responseElement.textContent += content;
  }
}
