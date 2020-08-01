import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import Height from '@/presenters/Height/Height.vue';

describe('Height.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: '10rem',
      declaration: 'heightVar',
    };

    wrapper = mount(Height, {
      propsData: {
        token,
      },
    });
  });

  it('render given Height', () => {
    const { element: HeightElement } = wrapper.find('[data-testid=box]');

    const styles = window.getComputedStyle(HeightElement);

    // @ts-ignore
    expect(styles['height']).toBe('10rem');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p');

    expect(variableElement.textContent).toBe('10rem');
  });
});
