import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import FontWeight from '@/presenters/FontWeight/FontWeight.vue';

describe('FontWeight.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: 'bold',
      declaration: 'FontWeight',
    };

    wrapper = mount(FontWeight, {
      propsData: {
        token,
      },
    });
  });

  it('render given FontWeight', () => {
    const { element: colorElement } = wrapper.find(
      '[data-testid=fontWeightSample]'
    );

    const styles = window.getComputedStyle(colorElement);

    // @ts-ignore
    expect(styles['font-weight']).toBe('bold');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p:not([data-testid])');

    expect(variableElement.textContent).toBe('bold');
  });
});
