import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Aryan. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/itzz-aryan-121"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Aryan
          </a>
        </span>
      </p>
    </footer>
  );
}