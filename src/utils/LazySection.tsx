import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function LazySection({ children }: Props) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{visible ? children : null}</div>;
}

export default LazySection;
