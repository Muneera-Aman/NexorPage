
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    let observer;
    let timeoutId;

    function scrollToSection() {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return true;
      }

      return false;
    }

    if (!scrollToSection()) {
      observer = new MutationObserver(() => {
        if (scrollToSection()) {
          observer.disconnect();
          clearTimeout(timeoutId);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      timeoutId = setTimeout(() => {
        observer.disconnect();
      }, 5000);
    }

    return () => {
      observer?.disconnect();
      clearTimeout(timeoutId);
    };
  }, [pathname, hash]);

  return null;
}
