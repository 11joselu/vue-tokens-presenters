import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import Spacing from '@/presenters/Spacing/Spacing.vue';

describe('Spacing.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: '20px',
      declaration: 'SpacingVar',
    };

    wrapper = mount(Spacing, {
      propsData: {
        token,
      },
    });
  });

  it('render given Spacing', () => {
    const { element: SpacingElement } = wrapper.find('[data-testid=box]');

    const styles = window.getComputedStyle(SpacingElement);

    expect(styles['padding']).toBe('20px');
    expect(styles['width']).toBe('20px');
    expect(styles['height']).toBe('20px');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p');

    expect(variableElement.textContent).toBe('20px');
  });
});
