function generateSkills (skills) {
  let result = "";
  if (skills?.length === 0) {
    return "<p>No tienes techs agregadas</p>"
  } else {
    skills.map((skill) => {
      let data = `<li class="project__description__info__technologies__tech">${skill}</li>`;
      result += data;
    });
  }
  return result;
}

export default generateSkills;
