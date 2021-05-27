import generateProject from "../src/generate-project";
import { getByText } from "@testing-library/dom";

describe("test in generateProject function", () => {
  test(
    "should show a paragraph if the prop technologies in argument is an empty array",
    () => {
      const container = document.createElement("div");
      const mockData = {
        technologies: [],
      };

      generateProject(mockData, container);
      expect(getByText(container, "No tienes techs agregadas").tagName).
        toBe("P");
    });

  test("should render correct element with valid arguments",  () => {
    const container = document.createElement("div");
    const mockData = {
      title: "Example",
      image: "www.example.com",
      description: "lorem ipsum",
      technologies: ["Javascript", "Typescript"],
      code: "www.example.com",
      demo: "www.example.com"
    };

    generateProject(mockData, container);
    expect(getByText(container, "Example").tagName).toBe("H2")
  });
});
