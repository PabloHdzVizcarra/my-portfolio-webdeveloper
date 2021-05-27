import generateSkills from "../src/generate-technologies";
import { getAllByRole, getByText } from "@testing-library/dom";

describe("test in generateSkills function", () => {
  test("should show a paragraph if the skills list is empty", () => {
    let skills = [];
    const render = generateSkills(skills);
    document.body.insertAdjacentHTML("beforeend", render);

    const elementHTML = document.querySelector("p");
    expect(elementHTML.tagName).toBe("P");
    expect(elementHTML.textContent).toBe("No tienes techs agregadas");
  });

  test(
    "must render the same number of elements equal to the length skills passed as the argument ",
    () => {
      let skills = ["javascript", "typescript"];
      const data = generateSkills(skills);
      const container = document.createElement("div");
      container.insertAdjacentHTML("beforeend", data);

      expect(getByText(container, "javascript").textContent).toBe("javascript");
      expect(getByText(container, "typescript").textContent).toBe("typescript");
      expect(getAllByRole(container, "listitem").length).toBe(2);
    });
});
