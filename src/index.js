import "./styles.css";
import "./animation-text";

const projects = document.querySelector(".projects");
let url = "https://9dhcpnsgga.execute-api.us-east-2.amazonaws.com/default/personal-projects"

fetch(url)
  .then(response => response.json())
.then(data => {
  data.map((project) => {
    generateProject(project);
  })
})
  .catch(console.log)

function generateProject (data) {
  let project = `
    <div class="project__container">
            <h2 class="project__name">${data.title}</h2>
            <div class="project__description">
                <img src="${data.image}" alt="${data.title}" class="project__description__image">
                <div class="project__description__info">
                    <p class="project__description__info__text">${data.description}</p>
                    <ul class="project__description__info__technologies">
                        ${generateSkills(data.technologies)}
                    </ul>
                </div>
            </div>
            <div class="project__buttons">
                <a class="project__buttons__demo" href="${data.code}">
                    <img src="./images/github.svg" alt="" class="project__buttons__item">
                </a>
                <a class="project__buttons__github" href="${data.demo}">
                    <img src="./images/web2.svg" alt="" class="project__buttons__item">
                </a>
            </div>

        </div>
  `;

  projects.insertAdjacentHTML("beforeend", project);
}

function generateSkills(skills) {
  let result = "";
  skills.map((skill) => {
    let data = `<li class="project__description__info__technologies__tech">${skill}</li>`
    result += data;
  })
  return result;
}
