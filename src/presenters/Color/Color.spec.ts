import { render, screen } from '@testing-library/vue';
import Color from '@/presenters/Color/Color.vue';

describe('Color.vue', () => {
  beforeEach(() => {
    const token = {
      value: 'red',
      declaration: 'color',
    };

    render(Color, {
      propsData: {
        token,
      },
    });
  });

  it('render given Color', () => {
    const colorElement = screen.getByTestId('box');

    const styles = window.getComputedStyle(colorElement);

    // @ts-ignore
    expect(styles['background-color']).toBe('red');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('red');

    expect(variableElement.textContent).toBe('red');
  });
});
