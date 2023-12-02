<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Ejecutar en desarrollo

1. Clone repository
2. Execute
```
yarn install
```
3. Install Nest CLI 

```
npm i -g @nestjs/cli
```

4. Run the database
```
docker-compose up -d
```

5. Clone file ___.env.tempalte___ and rename to __.env__
```
localhost:3000/api/v2/seed
```

6. fill the enviroment variables ```.env```

7. Execute the app using:
```
yarn start:dev
```

8. Insert data seed
```
localhost:3000/api/v2/seed
```

## Prod build
1.Create file ```.env.prod```
2.Build image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
3. Run image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

10. Run image


## Stack
* MongoDB
* Nest

