FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install @feathersjs/feathers nodemon dotenv @feathersjs/express mongodb feathers-mongodb mongoose feathers-mongoose --silent

COPY . .

EXPOSE 3030

CMD ["npm", "run", "start"]
