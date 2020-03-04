FROM node:12

RUN apt-get update 
RUN apt-get -y install \
        libfontconfig

WORKDIR /app

COPY . ./
RUN npm install
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
