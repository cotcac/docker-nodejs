# Create
```
kubectl apply -f kubernetes/deployment.yaml 
deployment.apps/nginx-deployment created
```
# Check
```
ubectl get deployments
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
nginx-deployment   3/3     3            3           70s
```

# Create and edit service
```
kubectl apply -f kubernetes/service.yaml 
```

Open
```
minikube service nginx-deployment
```