import { render } from "@testing-library/react";
import App from "../App";

describe("Main Application", () => {
  it("main application should render without crashing", () => {
    render(<App />);
  });
});
