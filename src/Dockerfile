FROM node:12.16.1-slim

EXPOSE 5000

CMD ["npm", "start"]

RUN apt-get update \
    && apt-get -y install \
        libfontconfig1=2.11.0-6.7+b1

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build
