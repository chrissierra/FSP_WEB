# STEP 1 build static website
FROM node:alpine as build


WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prod

FROM nginx:1.19
VOLUME /var/cache/nginx
COPY --from=build /app/dist/web-tfsp /usr/share/nginx/html
#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf asdf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf