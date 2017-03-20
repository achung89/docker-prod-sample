FROM node:boron
# make and copy 
RUN mkdir -p /code
COPY package.json /code
# only copy directory if you are not using volume mounts
# COPY . /code

# set working directory to /code
WORKDIR /code
RUN npm install
EXPOSE 8080
CMD npm run dev
