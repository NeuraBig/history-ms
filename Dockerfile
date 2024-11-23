FROM node:22.11.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn config set network-timeout 600000

RUN yarn

COPY . .

EXPOSE 3002