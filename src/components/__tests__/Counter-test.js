import React from 'react';
import Counter from '../Counter';
import assertEqualJSX from '../../utils/assertEqualJSX';
import { testRenderComponent } from '../../utils/testRenderComponent';

const renderWithProps = testRenderComponent(Counter);

describe('Counter', () => {
  it('should render a count value', () => {
    const { result } = renderWithProps({ increment: 1, color: 'black' });

    // Make assertions on the result itself
    expect(result.props.style).toEqual({ color: 'black' });

    assertEqualJSX(result, (
      <h1 className={result.props.className} style={{ color: 'black' }}>
        Counter (1): 0
      </h1>
    ));
  });
});

