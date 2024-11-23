<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

docker-compose up --force-recreate --build -d

# Backend API

1. Clonar proyecto
2. ```yarn install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar: ```yarn start:dev```


# Production notes:

## Build image .

```
docker build -t visualiza-backend:v0.0.2 .
```

## Run image

```
docker run -d -p 3000:3000 --name visualiza-backend-prod \
-e APP_VERSION=0.0.3 \
-e STAGE=dev \
-e DB_HOST=192.168.0.55 \
-e DB_PORT=5432 \
-e DB_NAME=Test_VisualizaDB \
-e DB_USERNAME=support \
-e DB_PASSWORD=Argentum123 \
-e PORT=3000 \
-e HOST_API=http://localhost:3000/api \
-e FRONTEND_URL=http://192.168.0.145:4001 \
-e JWT_SECRET="a4e91b832f6d4c7e9b3f8a2d1*e6c0f7da4e91b83!2f6d4?c7e9b3f8a2d1e6c-0f7da4e91b832f6d4c7e9b3f8a2d1e&6c0f7*d" \
-e MAIL_HOST=smtp.gmail.com \
-e MAIL_USER=soportevisualiza@gmail.com \
-e MAIL_PASSWORD="ymom ajlw qjda lddi" \
-e MAIL_FROM=soportevisualiza@gmail.com \
visualiza-backend:v0.0.2
```

## Etiquetar
```
docker tag visualiza-backend:v0.0.2 argserverdev/vs-backend:v0.0.2
```

```
docker push argserverdev/vs-backend:v0.0.2
```

.