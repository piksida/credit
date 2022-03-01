# credit
#### (```docker-compose.yml```):
- remove volumes:  
 ```docker-compose down -v```
 - build:  
 ```docker-compose up -d --build```
 
- check db:  
```docker exec -it server_mongo_1 mongo```  
```#``` ```show dbs``` (list of databases),  ```show collections``` (list of collections), ```db.collection.find()``` (retreive documents from collection)
