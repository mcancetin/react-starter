import App from "@/App";
import { render, screen } from "@testing-library/react";

describe("App Component", () => {
    it("should render the heading", () => {
        render(<App />);

        const titleElement = screen.getByRole("heading");

        expect(titleElement).toBeInTheDocument();
    });
});
