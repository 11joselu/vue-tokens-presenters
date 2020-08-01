import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import Opacity from '@/presenters/Opacity/Opacity.vue';

describe('Opacity.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: '0.5',
      declaration: 'opacityVar',
    };

    wrapper = mount(Opacity, {
      propsData: {
        token,
      },
    });
  });

  it('render given Opacity', () => {
    const { element: OpacityElement } = wrapper.find('[data-testid=box]');

    const styles = window.getComputedStyle(OpacityElement);

    // @ts-ignore
    expect(styles['opacity']).toBe('0.5');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p');

    expect(variableElement.textContent).toBe('0.5');
  });
});
