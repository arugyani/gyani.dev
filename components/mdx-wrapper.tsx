"use client";

import { ReactNode, useEffect, useState } from "react";

export default function MDXWrapper({
  draft,
  children,
}: {
  draft: boolean;
  children: ReactNode;
}) {
  const [visible, setVisible] = useState(!draft);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("draftMode");
      if (stored) setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) return;
    if (password !== "super-secure-password") return;

    setVisible(true);

    if (typeof window !== "undefined") {
      localStorage.setItem("draftMode", "true");
    }
  }, [password, visible]);

  return (
    <div>
      {!visible && (
        <div className="flex flex-col gap-2">
          <label htmlFor="draft" className="font-bold">
            This note is a draft. Enter password to unlock.
          </label>
          <input
            type="password"
            id="draft"
            className="border px-2 rounded-lg text-md max-w-[200px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      )}
      {visible && children}
    </div>
  );
}
