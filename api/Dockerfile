FROM node:alpine

WORKDIR /usr/app/api

EXPOSE 8080

COPY package*.json ./
RUN npm install --omit=dev
COPY . ./
RUN npm install typescript
RUN npm run build

CMD node ./build/index.js