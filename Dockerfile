FROM hub.c.163.com/public/nodejs:6.11.0

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

RUN mkdir -p /home/react

COPY . /home/react

WORKDIR /home/react
RUN cnpm install
RUN cnpm run build

WORKDIR /home/react/server
RUN cnpm install

EXPOSE 3001
ENTRYPOINT ["node", "/home/react/server/bin/www"]
