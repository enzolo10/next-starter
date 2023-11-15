# Rebuild the source code only when needed
FROM node:18-alpine

RUN yarn set version stable

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./.yarn ./.yarn
COPY ./.yarnrc.yml .

RUN yarn install

COPY . .
ARG ENV
ENV NODE_ENV=${ENV}
RUN yarn build

CMD ["yarn", "start"]