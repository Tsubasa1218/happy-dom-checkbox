import { render } from "@testing-library/react";
import { test, expect } from "vitest";

import App from "./App";

test("Example", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
