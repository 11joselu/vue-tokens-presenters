import { render, screen } from '@testing-library/vue';
import FontWeight from '@/presenters/FontWeight/FontWeight.vue';

describe('FontWeight.vue', () => {
  beforeEach(() => {
    const token = {
      value: 'bold',
      declaration: 'FontWeight',
    };

    render(FontWeight, {
      propsData: {
        token,
      },
    });
  });

  it('render given FontWeight', () => {
    const colorElement = screen.getByTestId('fontWeightSample');

    const styles = window.getComputedStyle(colorElement);

    // @ts-ignore
    expect(styles['font-weight']).toBe('bold');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('bold');

    expect(variableElement.textContent).toBe('bold');
  });
});
