import { fireEvent, render } from "@testing-library/react";
import ResponsiveDrawer from "../../components/Main";

describe("Sidebar", () => {
  it("Sidebar should render without crashing", () => {
    render(<ResponsiveDrawer />);
  });
  it("searchbar", () => {
    const { getByTestId } = render(<ResponsiveDrawer />);
    const searchInput = getByTestId("searchBar").querySelector("input");
    expect(searchInput).toBeInTheDocument();
    // fireEvent.change(searchInput, { target: { value: "test" } });
    // expect(searchInput.value).toBe("test");
  });
});
