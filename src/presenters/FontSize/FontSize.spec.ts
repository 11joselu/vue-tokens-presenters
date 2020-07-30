import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import FontSize from '@/presenters/FontSize/FontSize.vue';

describe('FontSize.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: '20px',
      declaration: 'fontSize',
    };

    wrapper = mount(FontSize, {
      propsData: {
        token,
      },
    });
  });

  it('render given FontSize', () => {
    const { element: colorElement } = wrapper.find(
      '[data-testid=fontSizeSample]'
    );

    const styles = window.getComputedStyle(colorElement);

    // @ts-ignore
    expect(styles['font-size']).toBe('20px');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p:not([data-testid])');

    expect(variableElement.textContent).toBe('20px');
  });
});
