#touch #
FROM container-registry.dev.bip.va.gov/rhscl/nginx-118-rhel7:latest

EXPOSE 8080
USER root

COPY ./dist/ /usr/share/nginx/html/
COPY env.sh  /usr/share/nginx/html
COPY .env  /usr/share/nginx/html
COPY ./static/import-dependencies.js  /usr/share/nginx/html
COPY ./static/import-root.js  /usr/share/nginx/html
COPY nginx.conf /etc/opt/rh/rh-nginx118/nginx/nginx.conf

RUN chmod +x /usr/share/nginx/html/env.sh

WORKDIR /usr/share/nginx/html
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]