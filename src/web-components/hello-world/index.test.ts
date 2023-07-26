import '.';

describe('hello-world', () => {
  test('should have a div with text', () => {
    const element = document.createElement('superviz-hello-world');
    document.body.appendChild(element);

    const renderedElement = document.getElementsByTagName('superviz-hello-world')[0];

    expect(renderedElement.shadowRoot?.querySelector('div')?.textContent).toEqual(
      'Hello from SuperViz!',
    );
  });
});
