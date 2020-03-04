# syntax = docker/dockerfile:experimental
FROM node:12.16.1-slim AS base

EXPOSE 5000

CMD ["npm", "start"]

ENV NODE_ENV=development

WORKDIR /app

RUN rm -f /etc/apt/apt.conf.d/docker-clean; echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache
RUN --mount=type=cache,target=/var/cache/apt --mount=type=cache,target=/var/lib/apt \
    apt-get update \
    && apt-get -y install --no-install-recommends \
        libfontconfig1=2.11.0-6.7+b1 \
    && rm -rf /var/lib/apt/lists/* \
    && chown -R node:node /app /home/node/

USER node

COPY --chown=node:node package.json package-lock.json ./
RUN --mount=type=cache,target=/home/node/.npm/ npm install --production

FROM base as development

CMD ["npm", "run", "dev"]

RUN --mount=type=cache,target=/home/node/.npm/ npm install --development

COPY --chown=node:node . ./
RUN npm run build

FROM nginx:1.17.8-alpine as production
COPY --from=development /app/build /usr/share/nginx/html/
