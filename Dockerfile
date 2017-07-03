FROM node:8

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY *.js /app

EXPOSE 3300
CMD ["npm", "start"]
