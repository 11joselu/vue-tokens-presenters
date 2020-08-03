import { render, screen } from '@testing-library/vue';
import Shadow from '@/presenters/Shadow/Shadow.vue';

describe('Shadow.vue', () => {
  beforeEach(() => {
    const token = {
      value: '15px 15px 27px #e1e1e3',
      declaration: 'ShadowVar',
    };

    render(Shadow, {
      propsData: {
        token,
      },
    });
  });

  it('render given Shadow', () => {
    const shadowElement = screen.getByTestId('box');

    const styles = window.getComputedStyle(shadowElement);

    // @ts-ignore
    expect(styles['box-shadow']).toBe('15px 15px 27px #e1e1e3');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('15px 15px 27px #e1e1e3');

    expect(variableElement.textContent).toBe('15px 15px 27px #e1e1e3');
  });
});
