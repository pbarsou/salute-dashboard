import { useEffect, useState } from 'react';

const useCSSVariable = (variableName: string): string => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const root = document.documentElement;

    const updateValue = () => {
      const computedStyle = getComputedStyle(root);
      const newValue = computedStyle.getPropertyValue(variableName).trim();
      setValue(newValue);
    };

    // Observe changes to the class attribute of the root element
    const observer = new MutationObserver(updateValue);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Initial value
    updateValue();

    return () => {
      observer.disconnect();
    };
  }, [variableName]);

  return value;
};

export default useCSSVariable;
