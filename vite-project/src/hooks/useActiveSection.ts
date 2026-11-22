import { useEffect, useState } from 'react';

// Returns the id of the section currently on screen,
// so the sidebar menu can highlight it.
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    function handleScroll() {
      const line = window.scrollY + window.innerHeight * 0.35;
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;

      let current = ids[0] ?? '';
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= line) current = id;
      }
      if (atBottom) current = ids[ids.length - 1] ?? current;

      setActive(current);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids]);

  return active;
}
