import { render, screen } from '@testing-library/vue';
import FontSize from '@/presenters/FontSize/FontSize.vue';

describe('FontSize.vue', () => {
  beforeEach(() => {
    const token = {
      value: '20px',
      declaration: 'fontSize',
    };

    render(FontSize, {
      propsData: {
        token,
      },
    });
  });

  it('render given FontSize', () => {
    const colorElement = screen.getByTestId('fontSizeSample');

    const styles = window.getComputedStyle(colorElement);

    // @ts-ignore
    expect(styles['font-size']).toBe('20px');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('20px');

    expect(variableElement.textContent).toBe('20px');
  });
});
