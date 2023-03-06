import { render, cleanup, fireEvent } from "@testing-library/vue";
import Button from "./Button.vue";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("emits", async () => {
    jest.useFakeTimers()
  const text = "Click me; I'm sick";

  // Set the prop value by using the second argument of `render()`
  const { getByRole, emitted } = render(Button, {
    props: { text }
  });

  const button = getByRole("button");
  await fireEvent.click(button);
  jest.advanceTimersByTime(800);


  expect(emitted().fooo).toEqual([[123]]);
});
