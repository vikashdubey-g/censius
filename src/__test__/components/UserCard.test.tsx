import { render, screen } from "@testing-library/react";
import UserCard from "../../components/UserCard";
import { userConfigue } from "../../configue/userConfigue";

describe("UserCard", () => {
  it("UserCard should render without crashing", () => {
    const { getByTestId } = render(<UserCard userList={userConfigue} />);
    const userLabel = getByTestId("userName-0");
    expect(userLabel).toBeInTheDocument();
    expect(screen.getByText("Rahul Shah")).toBeInTheDocument();
  });
});
