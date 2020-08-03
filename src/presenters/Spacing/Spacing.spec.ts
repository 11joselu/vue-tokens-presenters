import { render, screen } from '@testing-library/vue';
import Spacing from '@/presenters/Spacing/Spacing.vue';

describe('Spacing.vue', () => {
  beforeEach(() => {
    const token = {
      value: '20px',
      declaration: 'SpacingVar',
    };

    render(Spacing, {
      propsData: {
        token,
      },
    });
  });

  it('render given Spacing', () => {
    const spacingElement = screen.getByTestId('box');

    const styles = window.getComputedStyle(spacingElement);

    expect(styles['padding']).toBe('20px');
    expect(styles['width']).toBe('20px');
    expect(styles['height']).toBe('20px');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('20px');

    expect(variableElement.textContent).toBe('20px');
  });
});
