import { render, screen } from '@testing-library/vue';
import Border from '@/presenters/Border/Border.vue';

describe('Border.vue', () => {
  beforeEach(() => {
    const token = {
      value: '1px solid tomato',
      declaration: 'border',
    };

    render(Border, {
      propsData: {
        token,
      },
    });
  });

  it('render given border', () => {
    const borderedElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(borderedElement);

    expect(styles['border']).toBe('1px solid tomato');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('1px solid tomato');

    expect(variableElement.textContent).toBe('1px solid tomato');
  });
});
