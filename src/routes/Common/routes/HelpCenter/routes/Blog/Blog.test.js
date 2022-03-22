import React from "react";
import { render } from "@testing-library/react";

import Blog from "./Blog";

test("Renders blog test...", () => {
  const { getByText } = render(<Blog />);

  expect(getByText(/title/i)).toBeInTheDocument();
});
