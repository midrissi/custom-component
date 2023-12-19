import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdOutlineTextSnippet } from 'react-icons/md';

import CustomSettings, { BasicSettings } from './Custom.settings';

export default {
  craft: {
    displayName: 'Custom',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(CustomSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'Custom',
    exposed: true,
    icon: MdOutlineTextSnippet,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    name: 'Qodly',
  },
} as T4DComponentConfig<ICustomProps>;

export interface ICustomProps extends webforms.ComponentProps {
  name?: string;
}
