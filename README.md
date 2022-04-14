
# Fibonaccify

A simple fibonacci calculator made for the Tango team!


## Deployment

To deploy this project run from the root folder run the following commands

```bash
  cd api
  npm i 
  npm start
```
Do the same for the client folder, starting from the root folder

```bash
  cd client
  npm i 
  npm start
```


## Documentation

The backend server should run on port 3000.
The frontend should run on port 8081, if available.

Just enter a number in the imput area and click Fibonaccify!
## API Reference

#### Get fibonacci number

```http
  GET /api/fibonacci/:number
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| number | `int` | Fibonacci index number|

It calculates the number conrresponding to the index send as a parameter.

