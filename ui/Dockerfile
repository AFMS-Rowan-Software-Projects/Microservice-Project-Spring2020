FROM node:12

WORKDIR /usr/src/app
RUN node --version
COPY package*.json ./
RUN npm install

COPY . .
#RUN npm run build
#CMD ["npm", "start"]
CMD ["npm", "run", "dev"]
