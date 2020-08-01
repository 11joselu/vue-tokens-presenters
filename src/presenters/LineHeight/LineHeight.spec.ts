import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import LineHeight from '@/presenters/LineHeight/LineHeight.vue';

describe('LineHeight.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: '1.5rem',
      declaration: 'LineHeight',
    };

    wrapper = mount(LineHeight, {
      propsData: {
        token,
      },
    });
  });

  it('render given LineHeight', () => {
    const { element: colorElement } = wrapper.find(
      '[data-testid=LineHeightSample]'
    );

    const styles = window.getComputedStyle(colorElement);

    // @ts-ignore
    expect(styles['line-height']).toBe('1.5rem');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p:not([data-testid])');

    expect(variableElement.textContent).toBe('1.5rem');
  });
});
