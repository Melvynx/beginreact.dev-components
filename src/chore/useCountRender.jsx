import { useRef } from 'react';

export const useCountRender = (componentName) => {
  const renderCount = useRef(0);

  renderCount.current += 1;
  console.log(componentName, `renderCount: ${renderCount.current}`);

  return renderCount;
};
