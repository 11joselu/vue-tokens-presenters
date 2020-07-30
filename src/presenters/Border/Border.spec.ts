import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import Border from '@/presenters/Border/Border.vue';

describe('Border.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: '1px solid tomato',
      declaration: 'border',
    };

    wrapper = mount(Border, {
      propsData: {
        token,
      },
    });
  });

  it('render given border', () => {
    const { element: borderedElement } = wrapper.find('[data-testid=box]');
    const styles = window.getComputedStyle(borderedElement);

    expect(styles['border']).toBe('1px solid tomato');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p');

    expect(variableElement.textContent).toBe('1px solid tomato');
  });
});
