FROM debian

RUN apt-get update
RUN apt-get -y install apt-transport-https curl lsb-release gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update
RUN apt-get -y install nodejs

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
