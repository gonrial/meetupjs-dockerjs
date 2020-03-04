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

COPY --chown=node:node package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm/ npm install --production

FROM base as development

CMD ["npm", "run", "dev"]

RUN --mount=type=cache,target=/root/.npm/ npm install --development

COPY --chown=node:node . ./
RUN npm run build

FROM nginx:1.17.8-alpine as production
COPY --from=development /app/build /usr/share/nginx/html/

FROM mesosphere/aws-cli:1.14.5 as s3
COPY --from=development /app/build /app
RUN --mount=type=secret,id=aws,target=/root/.aws/credentials aws s3 cp /app s3://bucket
