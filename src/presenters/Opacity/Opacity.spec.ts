import { render, screen } from '@testing-library/vue';
import Opacity from '@/presenters/Opacity/Opacity.vue';

describe('Opacity.vue', () => {
  beforeEach(() => {
    const token = {
      value: '0.5',
      declaration: 'opacityVar',
    };

    render(Opacity, {
      propsData: {
        token,
      },
    });
  });

  it('render given Opacity', () => {
    const opacityElement = screen.getByTestId('box');

    const styles = window.getComputedStyle(opacityElement);

    // @ts-ignore
    expect(styles['opacity']).toBe('0.5');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('0.5');

    expect(variableElement.textContent).toBe('0.5');
  });
});
