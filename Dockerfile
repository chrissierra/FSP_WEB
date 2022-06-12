FROM node:16.10 as angular
WORKDIR /app

COPY package.json /app/package.json
RUN npm install
COPY . .
RUN npm run prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/web-tfsp /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
