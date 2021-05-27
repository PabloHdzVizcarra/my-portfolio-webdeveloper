import generateSkills from "./generate-technologies";

function generateProject (data, elementHTML) {
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

  elementHTML.insertAdjacentHTML("beforeend", project);
}

export default generateProject;
