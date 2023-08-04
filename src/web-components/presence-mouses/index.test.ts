import sleep from '../../common/utils/sleep';

import '.';

const element = document.createElement('superviz-mouses');
document.body.appendChild(element);

describe('Mouses web component', () => {
  test('should have a div id with attendee id and a attendee name in innerHTML', async () => {
    const renderedElement = document.getElementsByTagName('superviz-mouses')[0];
    const attendeeId = 'Attendee1';
    const name = 'Attendee Name';
    const mouseFollower = document.createElement('div');
    mouseFollower.setAttribute('id', `${attendeeId}`);
    mouseFollower.setAttribute('class', 'mouse-follower');
    renderedElement.appendChild(mouseFollower);

    const mouseUserName = document.createElement('div');
    mouseUserName.setAttribute('class', 'mouse-user-name');
    mouseUserName.innerHTML = name;

    renderedElement.appendChild(mouseUserName);

    await sleep();

    const attendeeElement = renderedElement.shadowRoot?.querySelector('#Attendee1');
    expect(attendeeElement).toBeTruthy();

    const mouseUserNameElement = renderedElement.shadowRoot?.querySelector('.mouse-user-name');
    expect(mouseUserNameElement).toBeTruthy();
    expect(mouseUserNameElement?.textContent).toEqual(name);
  });

  it('should add event listeners on resize window and mouse move', async () => {
    // mock
    const resizeHandler = jest.fn();
    const moveHandler = jest.fn();

    // listeners
    element.addEventListener('resize', resizeHandler);
    element.addEventListener('mousemove', moveHandler);

    // simulate events
    element.dispatchEvent(new Event('resize'));
    element.dispatchEvent(new MouseEvent('mousemove'));

    // events called
    expect(resizeHandler).toHaveBeenCalled();
    expect(moveHandler).toHaveBeenCalled();
  });
});
