FROM node:12

WORKDIR /usr/src/app
RUN node --version
COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "start"]
