FROM node:12.16.1-slim AS base

EXPOSE 5000

CMD ["npm", "start"]

ENV NODE_ENV=production

WORKDIR /app

RUN apt-get update \
    && apt-get -y install --no-install-recommends \
        libfontconfig1=2.11.0-6.7+b1 \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm install --no-cache --production

FROM base as development

ENV NODE_ENV=development

CMD ["npm", "run", "dev"]

RUN npm install --no-cache --development

COPY . ./
RUN npm run build

FROM base as production
COPY --from=development build .
