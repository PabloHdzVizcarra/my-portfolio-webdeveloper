function generateSkills (skills) {
  let result = "";
  skills.map((skill) => {
    let data = `<li class="project__description__info__technologies__tech">${skill}</li>`;
    result += data;
  });
  return result;
}

export { generateSkills };
