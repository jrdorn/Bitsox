import React from "react";
import { render } from "@testing-library/react";

import FAQs from "./FAQs";

test("Renders FAQs...", () => {
  const { getByText } = render(<FAQs />);

  expect(getByText(/First/i)).toBeInTheDocument();
});
