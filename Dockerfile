FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /
COPY . .
RUN npm i --no-save --no-optional --save-exact && npm dedupe && npm prune --production
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
EXPOSE 3000
USER node
CMD ["npm", "start"]
