FROM node:lts-alpine as deps 
WORKDIR /var/www/frontend 
COPY package.json . 
RUN npm install 
FROM node:lts-alpine as build 
WORKDIR /var/www/frontend 
COPY --from=deps /var/www/frontend/node_modules ./node_modules 
COPY . . 
RUN npm run build 
FROM nginx:stable-alpine 
COPY --from=build /var/www/frontend/build /usr/share/nginx/html 
COPY --from=build /var/www/frontend/nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]
