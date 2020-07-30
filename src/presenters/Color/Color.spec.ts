import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import Color from '@/presenters/Color/Color.vue';

describe('Color.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: 'red',
      declaration: 'color',
    };

    wrapper = mount(Color, {
      propsData: {
        token,
      },
    });
  });

  it('render given Color', () => {
    const { element: colorElement } = wrapper.find('[data-testid=box]');

    const styles = window.getComputedStyle(colorElement);

    // @ts-ignore
    expect(styles['background-color']).toBe('red');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p');

    expect(variableElement.textContent).toBe('red');
  });
});
