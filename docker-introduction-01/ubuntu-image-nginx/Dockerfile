#What base image we will use, for this case it will be small alpine linux image
FROM ubuntu:18.10
#Who is maintainer of this Dockerfile
ENV http_proxy=http://172.16.3.3:3128
ENV https_proxy=http://172.16.3.3:3128
MAINTAINER 5oV
#Expose the port 80 -> on this port the container will listen
EXPOSE 80
#Installation of required packages, run the following commands
RUN apt-get update && apt-get install -y nginx vim net-tools; \
    rm /usr/share/nginx/html/index.nginx-debian.html;
#Copy the current content from the current directory to destination /app
COPY index.html /usr/share/nginx/html
#Set our workdir as /app, in other words the directory the container should use when it starts up
WORKDIR /usr/share/nginx/html
#Run the command: start the nginx service
CMD /etc/init.d/nginx start && bash
