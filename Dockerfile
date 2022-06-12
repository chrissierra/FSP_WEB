FROM node:16.10 as build
WORKDIR /app

#COPY package.json /app/package.json
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prod

FROM nginx:1.19

#VOLUME /var/cache/nginx
#COPY --from=angular app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/web-tfsp/ /usr/share/nginx/html
