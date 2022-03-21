import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import index from "./index";

// test("Renders filters...", () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/Athletic/i)).toBeInTheDocument();
// });

// it("renders welcome message", () => {
//   render(<App />);
//   expect(screen.getByText("Learn React")).toBeInTheDocument();
// });

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

// it("navigates home when you click the logo", () => {
//   // Render app
//   render(
//     <BrowserRouter initialEntries={["/profile"]}>
//       <App />
//     </BrowserRouter>
//   );

//   // Interact with page
//   act(() => {
//     // Find the link (perhaps using the text content)
//     const goHomeLink = document.querySelector("#click-me");
//     // Click it
//     goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   // Check correct page content showed up
//   expect(document.body.textContent).toBe("Welcome");
// });
