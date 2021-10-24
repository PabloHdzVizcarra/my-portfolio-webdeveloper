# My Portfolio

My portfolio as a web developer, elaborated trying to make it simple.<br>
[Live Demo](https://pablo-urbano-hernandez-vizcarra.netlify.app/)

## Technologies

### HTML
I decided to use HTML in order to get some SEO. 

### CSS
I used only CSS to add styles, something that helped me a lot were the CSS variables to be able to manage the colors in a simple way, add responsive to the page so it could work optimally on mobile devices, using Flexbox is very simple.

### Javascript
In the same way I only decided to use Vanilla JS, because it is not a complex project at all, a single call to an external service is elaborated to obtain data and with them add the projects in a dynamic way to the page for an easy incorporation of new projects in the future.

### Webpack
I used webpack for easy project development and to be able to split my code into several Javascript files.

## Development

>npm install

Install all project dependencies

>npm start

Start the project with hot reloading

>npm run test

Run all test

## Deployment
I uploaded the code to a repository on GitHub, to have a version control system and be able to make a simple deployment with Netlify and be able to have CI / CD, since by default netlify updates the changes every time I make a push to the repository.

### GitHub Actions
The project has basic tests in case I want to add modifications in the future and through a GitHub action this tests are checked in each push to the repository.

### Docker
The project has a Dockerfile configured with a Nginx server to run from a container.

>**docker build -t [name image] .**

with this command you can build a docker image by adding the name of your choice

>**docker run -p 8080:80 --name [name container] [name image]**

With this command you can create a docker container based on the image you created previously 

### Kubernetes

It has its own file to deploy to a kubernetes pod. 

>cd infra

>kubectl apply -f k8s.yml

Create a pod in your kubernetes cluster and add a Nodeport service to be able to use it from the browser.
