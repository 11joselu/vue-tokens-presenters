import { render, screen } from '@testing-library/vue';
import Width from '@/presenters/Width/Width.vue';

describe('Width.vue', () => {
  beforeEach(() => {
    const token = {
      value: '50rem',
      declaration: 'WidthVar',
    };

    render(Width, {
      propsData: {
        token,
      },
    });
  });

  it('render given Width', () => {
    const widthElement = screen.getByTestId('box');

    const styles = window.getComputedStyle(widthElement);

    // @ts-ignore
    expect(styles['width']).toBe('50rem');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('50rem');

    expect(variableElement.textContent).toBe('50rem');
  });
});
