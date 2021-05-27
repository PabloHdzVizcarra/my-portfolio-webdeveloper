import "./styles.css";
import "./animation-text";

const projects = document.querySelector(".projects");

function generateProject () {
  let project = `
    <div class="project__container">
            <h2 class="project__name">Pelis Data</h2>
            <div class="project__description">
                <img src="https://res.cloudinary.com/du9fag77u/image/upload/v1602903485/Pelis%20Data.png" alt="" class="project__description__image">
                <div class="project__description__info">
                    <p class="project__description__info__text">
                        Aplicación donde puedes consultar información sobre películas,
                        cuenta con registro y login de usuarios se uso firebase para ese fin,
                        los datos vienen de la API de OMDb API
                    </p>
                    <ul class="project__description__info__technologies">
                        <li class="project__description__info__technologies__tech">JavaScript</li>
                        <li class="project__description__info__technologies__tech">JavaScript</li>
                        <li class="project__description__info__technologies__tech">JavaScript</li>
                        <li class="project__description__info__technologies__tech">JavaScript</li>
                        <li class="project__description__info__technologies__tech">JavaScript</li>
                    </ul>
                </div>
            </div>
            <div class="project__buttons">
                <a class="project__buttons__demo" href="https://www.google.com">
                    <img src="./images/github.svg" alt="" class="project__buttons__item">
                </a>
                <a class="project__buttons__github" href="https://www.google.com">
                    <img src="./images/web2.svg" alt="" class="project__buttons__item">
                </a>
            </div>

        </div>
  `;
}
