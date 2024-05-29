import React, { useEffect, useState } from "react";

export const HooksUsage = () => {
  const [usage, setUsage] = useState<Number>(9);

  useEffect(() => {
    const interval = setInterval(
      () => setUsage(Math.floor(Math.random() * 20 + 8)),
      5000
    );

    return () => {
      clearInterval(interval);
    };
  }, [usage]);

  return { usage };
};
