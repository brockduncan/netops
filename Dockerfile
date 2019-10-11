FROM node:10.16.3-alpine

# set our work dir in the docker fs
# node_modules is ignored with dockerignore so it isn't copied into docker fs
# we want to use the one created from npm install below
WORKDIR /app
# add /app/node_modules.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# copy our package.json to docker fs
COPY package.json /app/package.json
# run npm install
RUN npm install
# exec the start script
CMD [ "npm", "start" ]
EXPOSE 8080