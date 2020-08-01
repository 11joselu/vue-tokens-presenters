import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import Width from '@/presenters/Width/Width.vue';

describe('Width.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: '50rem',
      declaration: 'WidthVar',
    };

    wrapper = mount(Width, {
      propsData: {
        token,
      },
    });
  });

  it('render given Width', () => {
    const { element: WidthElement } = wrapper.find('[data-testid=box]');

    const styles = window.getComputedStyle(WidthElement);

    // @ts-ignore
    expect(styles['width']).toBe('50rem');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p');

    expect(variableElement.textContent).toBe('50rem');
  });
});
