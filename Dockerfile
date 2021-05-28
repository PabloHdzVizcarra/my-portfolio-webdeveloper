FROM nginx:1.20.1-alpine

COPY ./dist /usr/share/nginx/html
