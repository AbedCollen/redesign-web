FROM nginx:stable-alpine
RUN apk add --update --no-cache ca-certificates bash busybox-extras curl mailcap
COPY ./dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]
