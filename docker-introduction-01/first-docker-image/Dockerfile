#What base image we will use, for this case it will be small alpine linux image
FROM alpine
#Who is maintainer of this Dockerfile
MAINTAINER name
#Installation of required packages, run the following commands
RUN apk update && apk add nodejs
#Copy the current content from the current directory to destination /app
COPY . /app
#Set our workdir as /app, in other words the directory the container should use when it starts up
WORKDIR /app
#Run the command: node index.js to show us the container file content we've copied there
CMD ["node","index.js"]
