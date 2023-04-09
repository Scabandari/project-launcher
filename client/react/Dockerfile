FROM node:alpine as builder

WORKDIR /usr/app/client

COPY package*.json ./
RUN npm install
COPY ./ ./ 

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm install -g serve

RUN npm run build

CMD ["serve", "-s", "build", "-l", "80"]

# FROM nginx
# COPY --from=builder /usr/app/client/build /usr/share/nginx/html
# # COPY --from=builder /usr/app/client/nginx/nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80