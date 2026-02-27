import { useEffect, useState } from 'react';

const TrailingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="paw-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: 'fixed',
        pointerEvents: 'none', // Essential so the cursor doesn't block clicks
        transform: 'translate(-50%, -50%)', // Center it
        zIndex: 9999,
      }}
    >
      🐾
    </div>
  );
};

export default TrailingCursor;
