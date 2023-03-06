import TextField from './Clarity.vue';
import {fireEvent, createEvent} from '@testing-library/vue';
import {render} from '@testing-library/vue';


    // @ts-ignore
const useTimers = (cb: any) => {
  setTimeout(cb, 100);
}

describe('CorporatesCsvDownloadTextField', ()=> {
  afterEach(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('emits with delay', async ()=> {
    jest.useFakeTimers();
    const rendered = render(TextField, {});
    const input = rendered.container.querySelector('input');

    // @ts-ignore
    await fireEvent(input as HTMLElement, createEvent('input', input, {
      target: {
        value: '1234',
      },
    }));

    expect(rendered.emitted().search).toBeFalsy();

    jest.advanceTimersByTime(800);

    expect(rendered.emitted().search).toEqual([["1234"]]);
  });

  it('test fake timers', async ()=> {
    jest.useFakeTimers();
    const cb = jest.fn()

    useTimers(cb);

    expect(cb).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(cb).toHaveBeenCalledTimes(1);
  });

});