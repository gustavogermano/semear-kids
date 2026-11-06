"use client";

import { useEffect } from "react";

/** Bloqueia a rolagem da página enquanto `locked` for verdadeiro (modais e menu mobile). */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
