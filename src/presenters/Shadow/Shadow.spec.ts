import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import Shadow from '@/presenters/Shadow/Shadow.vue';

describe('Shadow.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const token = {
      value: '15px 15px 27px #e1e1e3',
      declaration: 'ShadowVar',
    };

    wrapper = mount(Shadow, {
      propsData: {
        token,
      },
    });
  });

  it('render given Shadow', () => {
    const { element: ShadowElement } = wrapper.find('[data-testid=box]');

    const styles = window.getComputedStyle(ShadowElement);

    // @ts-ignore
    expect(styles['box-shadow']).toBe('15px 15px 27px #e1e1e3');
  });

  it('render variable value', () => {
    const { element: variableElement } = wrapper.find('p');

    expect(variableElement.textContent).toBe('15px 15px 27px #e1e1e3');
  });
});
