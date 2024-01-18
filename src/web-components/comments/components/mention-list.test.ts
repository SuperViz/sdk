import { MOCK_PARTICIPANT_LIST } from '../../../../__mocks__/participants.mock';
import sleep from '../../../common/utils/sleep';
import '.';

describe('CommentsMentionList', () => {
  let element;

  beforeEach(async () => {
    element = document.createElement('superviz-comments-mention-list');
    document.body.appendChild(element);
    await sleep();
  });

  test('renders without participants', async () => {
    await element.updateComplete;
    expect(element.shadowRoot.getElementById('mention-list').style.display).toEqual('none');
  });

  test('renders with participants', async () => {
    element.participants = MOCK_PARTICIPANT_LIST;
    await element.updateComplete;

    expect(element.shadowRoot.getElementById('mention-list').style.display).toEqual('block');
  });

  test('selects a participant and emits event', async () => {  
    element.participants = MOCK_PARTICIPANT_LIST;
    await element.updateComplete;
  
    const mentionItem = element.shadowRoot.querySelector('.mention-item');
    mentionItem.click();
  
    element['selectParticipant'](MOCK_PARTICIPANT_LIST[0]);
    expect(element.shadowRoot.getElementById('mention-list').style.display).toEqual('none'); 
  });

  test('should display avatar', async () => {
    element.participants = MOCK_PARTICIPANT_LIST;
    await element.updateComplete;

    const avatar = element.shadowRoot.querySelector('.avatar');
    expect(avatar).toBeTruthy();
  });

  test('should display default avatar', async () => {
    element.participants = [
      {
        ...MOCK_PARTICIPANT_LIST[0],
        avatar: null
      }
    ];
    await element.updateComplete;

    const defaultAvatar = element.shadowRoot.querySelector('.default-avatar');
    expect(defaultAvatar).toBeTruthy();
  });
});
