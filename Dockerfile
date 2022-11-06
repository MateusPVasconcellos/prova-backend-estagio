FROM node:16-slim AS dependencies

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000
CMD npm start