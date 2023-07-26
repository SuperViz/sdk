import '.';

const element = document.createElement('superviz-hello-world');
document.body.appendChild(element);

describe('hello-world', () => {
  it('should have a div with text', async () => {
    const renderedElement = document.getElementsByTagName('superviz-hello-world')[0];

    expect(renderedElement.shadowRoot?.querySelector('div')?.textContent).toEqual(
      'Hello from SuperViz!',
    );
  });
});
