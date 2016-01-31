jest.autoMockOff();

// Use `require` versus ES2015 imports to allow for jest mocking to work
const React = require('react');
const { default: Counter } = require('../Counter');
const { testRenderComponent } = require('../../utils/testRenderComponent');
const { default: assertEqualJSX } = require('../../utils/assertEqualJSX');

const renderWithProps = testRenderComponent(Counter);

describe('Counter', () => {
  it('should render a count value', () => {
    const { result } = renderWithProps({ increment: 1, color: 'black' });

    // Make assertions on the result itself
    expect(result.props.style).toEqual({ color: 'black' });

    assertEqualJSX(result, (
      <h1 style={{ color: 'black' }}>
        Counter (1): 0
      </h1>
    ));
  });
});

