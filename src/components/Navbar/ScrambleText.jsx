import { useState, useEffect, useRef } from 'react';

/** Single character scramble on hover */
const ScrambleText = ({ text }) => {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const [display, setDisplay] = useState(text);
  const raf = useRef(null);
  const iter = useRef(0);

  const scramble = () => {
    iter.current = 0;
    const len = text.length;
    const run = () => {
      setDisplay(
        text
          .split('')
          .map((ch, i) => (i < iter.current ? ch : CHARS[Math.floor(Math.random() * CHARS.length)])
          )
          .join('')
      );
      iter.current += 0.15;
      if (iter.current < len) raf.current = requestAnimationFrame(run);
      else setDisplay(text);
    };
    raf.current = requestAnimationFrame(run);
  };

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <span
      onMouseEnter={scramble}
      className="font-mono tabular-nums tracking-widest cursor-default select-none"
    >
      {display}
    </span>
  );
};

export default ScrambleText;
