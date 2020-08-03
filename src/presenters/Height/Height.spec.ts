import { render, screen } from '@testing-library/vue';
import Height from '@/presenters/Height/Height.vue';

describe('Height.vue', () => {
  beforeEach(() => {
    const token = {
      value: '10rem',
      declaration: 'heightVar',
    };

    render(Height, {
      propsData: {
        token,
      },
    });
  });

  it('render given Height', () => {
    const heightElement = screen.getByTestId('box');

    const styles = window.getComputedStyle(heightElement);

    // @ts-ignore
    expect(styles['height']).toBe('10rem');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('10rem');

    expect(variableElement.textContent).toBe('10rem');
  });
});
