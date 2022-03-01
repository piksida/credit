# credit_payment

#### Development (```docker-compose.yml```):
- remove volumes:  
 ```docker-compose down -v```
 - build:  
 ```docker-compose up -d --build```
 
- check db:  
```docker-compose exec db psql --username=postgres_sample --dbname=postgres_sample```  
```#``` ```\l``` (list of databases), ```\c``` (connection), ```\dt``` (list of relations), ```\q``` (quit)

  
#### Production (```docker-compose.prod.yml```):
- remove volumes:  
 ```docker-compose -f docker-compose.prod.yml down -v```
- build:  
 ```docker-compose -f docker-compose.prod.yml up -d --build```
- run migrations:  
 ```docker-compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput```
- place static files to the "static" directory:  
 ```docker-compose -f docker-compose.prod.yml exec web python manage.py collectstatic --no-input --clear```
