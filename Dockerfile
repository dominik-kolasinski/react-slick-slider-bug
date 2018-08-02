FROM keymetrics/pm2:latest-alpine

ENV CODE_DIR /code/

# Install in /tmp/ to use Docker cache
COPY package.json yarn.lock /tmp/
RUN cd /tmp \
  && yarn install \
  && mkdir -p $CODE_DIR \
  && mv /tmp/node_modules $CODE_DIR

WORKDIR $CODE_DIR
COPY . $CODE_DIR

RUN cd ${CODE_DIR} && yarn build

CMD [ "pm2-runtime", "start", "pm2.json" ]
