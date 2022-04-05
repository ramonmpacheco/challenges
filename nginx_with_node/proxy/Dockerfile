FROM nginx:1.15.0-alpine

RUN mkdir /etc/nginx/sites-available
RUN mkdir /etc/nginx/sites-enabled

# COPY tomcat.conf /etc/nginx/sites-available
COPY nginx.conf /etc/nginx/nginx.conf

# RUN ln -s /etc/nginx/sites-available/tomcat.conf /etc/nginx/sites-enabled/

# CMD [ "ping",  "ramon-tomcat"]
