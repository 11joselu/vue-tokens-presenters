import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import BorderRadius from '@/presenters/BorderRadius/BorderRadius.vue';

describe('BorderRadius.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: '30%',
      declaration: 'borderRadius',
    };

    wrapper = mount(BorderRadius, {
      propsData: {
        token,
      },
    });
  });

  it('render given BorderRadius', () => {
    const { element: borderedElement } = wrapper.find('[data-testid=box]');

    const styles = window.getComputedStyle(borderedElement);

    // @ts-ignore
    expect(styles['border-radius']).toBe('30%');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p');

    expect(variableElement.textContent).toBe('30%');
  });
});
