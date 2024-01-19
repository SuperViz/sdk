import { RealtimeEvent } from '../../../common/types/events.types';
import { Logger } from '../../../common/utils';
import { BaseComponent } from '../../base';
import { ComponentNames } from '../../types';

import { ParticipantMouse, PresenceMouseProps } from './types';

export class MousePointersHTML extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;

  // Realtime data
  private presences: Map<string, ParticipantMouse>;

  // Elements
  private container: HTMLElement;
  private wrappers: HTMLDivElement[] = [];
  private elementsWithDataAttribute: Map<string, HTMLElement> = new Map();
  private elements: HTMLElement[] = [];

  // General data about states/the application
  private dataAttributeName: string = 'data-superviz-id';

  // callbacks
  private goToMouseCallback: (position: { x: number, y: number}, elementId: string) => void;

  // Consts
  private readonly VOID_ELEMENTS = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
    'svg',
  ];

  /**
   * @function constructor
   * @param {string} containerId The id of the container element, inside of which may be rendered
   * @param {object} options The options object, used to customize the behavior of the component
   * @param {string} options.onGoToPresence The callback function to be called when the user, through presence controls like that of the Who Is Online component, is set to go to a participant's position
   */
  constructor(containerId: string, options?: PresenceMouseProps) {
    super();

    this.container = document.getElementById(containerId);

    if (!this.container) {
      const message = `Element with id ${containerId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger(`@superviz/sdk/${ComponentNames.PRESENCE}`);

    this.dataAttributeName = options?.dataAttributeName || this.dataAttributeName;

    this.elementsWithDataAttribute = this.getElementsWithDataAttribute();
    this.renderWrappers();

    this.goToMouseCallback = options?.onGoToPresence;
  }

  // ---------- SETUP ----------

  /**
   * @function start
   * @description start presence-mouse component
   * @returns {void}
   */
  protected start(): void {
    this.logger.log('presence-mouse component @ start');
    this.realtime.enterPresenceMouseChannel(this.localParticipant);

    // this.canvas.addEventListener('mousemove', this.onMyParticipantMouseMove);
    // this.canvas.addEventListener('mouseout', this.onMyParticipantMouseOut);
    // this.eventBus.subscribe(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMouse);
    // this.eventBus.subscribe(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, this.followMouse);
    // this.eventBus.subscribe(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setParticipantPrivate);
    // this.subscribeToRealtimeEvents();
  }

  /**
   * @function destroy
   * @description destroy presence-mouse component
   * @returns {void}
   */
  protected destroy(): void {
    this.logger.log('presence-mouse component @ destroy');
    this.realtime.leavePresenceMouseChannel();
    this.wrappers.forEach((wrapper) => wrapper.remove());

    // this.eventBus.unsubscribe(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMouse);
    // this.eventBus.unsubscribe(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, this.followMouse);
    // this.eventBus.unsubscribe(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setParticipantPrivate);
    // this.unsubscribeFromRealtimeEvents();
    // cancelAnimationFrame(this.animateFrame);
    // this.canvas.removeEventListener('mousemove', this.onMyParticipantMouseMove);
    // this.canvas.removeEventListener('mouseout', this.onMyParticipantMouseOut);
  }

  /**
   * @function renderWrappers
   * @description Creates a div wrapper around each valid element, in which the mouse pointers will be rendered.
   * @returns {void}
   * */
  private renderWrappers(): void {
    this.elementsWithDataAttribute.forEach((element, id) => {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('data-wrapper-id', id);
      wrapper.style.position = 'absolute';
      wrapper.style.width = '100%';
      wrapper.style.height = '100%';
      wrapper.style.top = '0'
      wrapper.style.left = '0';
      wrapper.style.pointerEvents = 'none';
      wrapper.style.overflow = 'hidden';
      wrapper.style.backgroundColor = 'red';
      this.setPositionNotStatic(element);
      element.appendChild(wrapper);
      this.wrappers.push(wrapper);
    });
  }

  // ---------- HELPERS ----------

  /**
   * @function getElementsWithDataAttribute
   * @description Get all elements with the data attribute name
   * @returns {Record<string, HTMLElement>} The elements with the data attribute
   */
  private getElementsWithDataAttribute(): Map<string, HTMLElement> {
    const listOfElements = this.container.querySelectorAll(`[${this.dataAttributeName}]`);
    const mapOfElements: Map<string, HTMLElement> = new Map();

    Array.from(listOfElements.values()).forEach((element: HTMLElement) => {
      mapOfElements.set(element.getAttribute(this.dataAttributeName), element);
    });

    return mapOfElements;
  }

  /**
   * @function setPositionNotStatic
   * @description sets the position of the element to relative if it is static
   * @param {HTMLElement} element the element to be checked
   * @returns {void}
   */
  private setPositionNotStatic(element: HTMLElement): void {
    const { position } = window.getComputedStyle(element);
    if (position !== 'static') return;

    element.style.setProperty('position', 'relative');
  }

  // ---------- TODO ----------
  private get textColorValues() {
    return 'textColorValues';
  }

  private renderElementWrapper = (): void => {};

  private renderVoidElementWrapper = (): void => {};

  private renderSVGElementWraooer = (): void => {};

  private subscribeToRealtimeEvents = (): void => {};

  private unsubscribeFromRealtimeEvents = (): void => {};

  private setParticipantPrivate = (isPrivate: boolean): void => {};

  private animate = (): void => {};

  private goToMouse = (id: string): void => {};

  private onMyParticipantMouseMove = (event: MouseEvent): void => {};

  private onParticipantsDidChange = (participants: Record<string, ParticipantMouse>): void => {};

  private onMyParticipantMouseOut = (event: MouseEvent): void => {};

  private onParticipantLeftOnRealtime = (participant: ParticipantMouse): void => {};

  private updateParticipantsMouses = (): void => {};

  private renderPresenceMouses = (mouse: ParticipantMouse): void => {};

  private removePresenceMouseParticipant(participantId: string): void {}

  private createMouseElement(mouse: ParticipantMouse) {}

  private followMouse = (id: string) => {};
}
