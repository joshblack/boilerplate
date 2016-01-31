import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

export const testRenderComponent = (Component) => (props = {}) => {
  const renderer = createRenderer();
  renderer.render(<Component {...props} />);
  const result = renderer.getRenderOutput();

  return {
    props,
    result,
    renderer,
  };
};

