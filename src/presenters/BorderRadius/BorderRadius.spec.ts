import { render, screen } from '@testing-library/vue';
import BorderRadius from '@/presenters/BorderRadius/BorderRadius.vue';

describe('BorderRadius.vue', () => {
  beforeEach(() => {
    const token = {
      value: '30%',
      declaration: 'borderRadius',
    };

    render(BorderRadius, {
      propsData: {
        token,
      },
    });
  });

  it('render given BorderRadius', () => {
    const borderedElement = screen.getByTestId('box');

    const styles = window.getComputedStyle(borderedElement);

    // @ts-ignore
    expect(styles['border-radius']).toBe('30%');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('30%');

    expect(variableElement.textContent).toBe('30%');
  });
});
