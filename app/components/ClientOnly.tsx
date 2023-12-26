'use client';

import React, { useState, useEffect } from 'react';

interface OnlyClientProps {
  children: React.ReactNode;
}

const OnlyClient: React.FC<OnlyClientProps> = ({ 
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
      setHasMounted(true);
  }, [])

  if (!hasMounted) return null;

  return (
    <>
      {children}
    </>
  );
};

export default OnlyClient;
