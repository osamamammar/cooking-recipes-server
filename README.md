# cooking-recipes-server
cooking recipes server

## Run Locally

Clone the project

```bash
  git clone https://github.com/osamamammar/cooking-recipes-server.git
```

Go to the project directory

```bash
  cd cooking-recipes-server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGODB_URL`


## Routes

#### Get all recipes

```http
  GET /recipes
```

| route        | desc      | access                |
| :-------- | :------- | :------------------------- |
| ` GET /recipes` | `Get all recipes` | Public |

#### Get one recipe

```http
  GET /recipe/:id
```

| route        | desc      | access                |
| :-------- | :------- | :------------------------- |
| ` GET /recipe/:id` | `Get one recipe` | Public |

#### Create a recipe

```http
  POST /recipe
```

| route        | desc      | access                |
| :-------- | :------- | :------------------------- |
| ` POST /recipe` | `Create a recipe` | Public |



#### Upload image

```http
  POST /upload
```

| route        | desc      | access                |
| :-------- | :------- | :------------------------- |
| ` POST /upload` | `Upload a dish image` | Public |


#### Update a recipe

```http
  PUT /recipe/:id
```

| route        | desc      | access                |
| :-------- | :------- | :------------------------- |
| ` PUT /recipe/:id` | `Update a recipe` | Public |

#### Delete a recipe

```http
  DELETE /recipe/:id
```

| route        | desc      | access                |
| :-------- | :------- | :------------------------- |
| ` DELETE /recipe/:id` | `Delete a recipe` | Public |


