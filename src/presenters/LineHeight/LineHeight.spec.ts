import { render, screen } from '@testing-library/vue';
import LineHeight from '@/presenters/LineHeight/LineHeight.vue';

describe('LineHeight.vue', () => {
  beforeEach(() => {
    const token = {
      value: '1.5rem',
      declaration: 'LineHeight',
    };

    render(LineHeight, {
      propsData: {
        token,
      },
    });
  });

  it('render given LineHeight', () => {
    const lineHeightElement = screen.getByTestId('LineHeightSample');

    const styles = window.getComputedStyle(lineHeightElement);

    // @ts-ignore
    expect(styles['line-height']).toBe('1.5rem');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('1.5rem');

    expect(variableElement.textContent).toBe('1.5rem');
  });
});
