FROM node:alpine as builder

WORKDIR /usr/app/client

COPY package*.json ./
RUN npm install
COPY ./ ./ 

ENV REACT_APP_PROD_API_URL=https://project-launcher-resume-api-ipj4okoesq-uc.a.run.app

RUN npm run build

# CMD ["serve", "-s", "build", "-l", "80"]

FROM nginx
COPY --from=builder /usr/app/client/build /usr/share/nginx/html
COPY --from=builder /usr/app/client/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80