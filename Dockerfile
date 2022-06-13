# STEP 1 build static website
FROM node:alpine


WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prod

FROM nginx
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=0 /app/dist/web-tfsp /usr/share/nginx/html


#CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
CMD sh -c "nginx -g 'daemon off;'"
#FROM nginx:1.19
#VOLUME /var/cache/nginx
#COPY --from=build /app/dist/web-tfsp /usr/share/nginx/html
##COPY ./nginx/nginx.conf /etc/nginx/nginx.conf asdf asfdasdf
#COPY ./nginx/nginx2.conf /etc/nginx/conf.d/default.conf