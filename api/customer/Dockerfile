FROM node:11.13.0

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules /work

WORKDIR /work
ADD . /work

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait
EXPOSE 3000
## Launch the wait tool and then your application
CMD /wait && npm start

HEALTHCHECK --start-period=30s --interval=5s CMD curl http://localhost:3000/actuator/health || exit 1