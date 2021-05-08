# build and rebuild images

```
docker build -t simple-docker .
```

# list all Imagtes

```
docker images
```

# remove images
```
docker rmi imageID
```

# run docker
```
docker run -p 4000:4000 simple-docker
```
## Run docker with can stop by Ctr + C
```
docker run -it -p 4000:4000 simple-docker
```
## Run docker with environment
```
docker run -it -p 4000:4000 -e PORT=1337 simple-docker
```
## Run useful option
```
--rm # Remove container when docker stop
-d Run docker in background
```

# Stop container runing.
```
docker container ls
docker stop container_id
```