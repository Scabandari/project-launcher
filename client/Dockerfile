FROM node:alpine as builder

WORKDIR /usr/app/client

COPY package*.json ./
RUN npm install
COPY ./ ./ 
RUN npm run build

FROM nginx
COPY --from=builder /usr/app/client/build /usr/share/nginx/html
EXPOSE 8080