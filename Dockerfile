FROM node:19
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9591
CMD [ "npm", "start" ]