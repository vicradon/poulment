# Post bird info
`POST /api/v1/birds/:ownerId/:id`

Example params
  ```
{
  ownerId: 5ecf5d6e8f48d91d683ebf04
  id: 5ed0175816d41d35bc82188d
}
  ```

Example response
  ```
{
    "birdInfo": {
        "number": 500,
        "layers": 170,
        "nonLayers": 330,
        "sick": 20,
        "healthy": 450,
        "deathRate": "10 daily",
        "productionRate": "400 daily"
    },
    "message": "bird information"
}
  ```


# Update bird info
`PATCH /api/v1/birds/:ownerId/:id`

Example params
  ```
{
  ownerId: 5ecf5d6e8f48d91d683ebf04
  id: 5ed0175816d41d35bc82188d
}
  ```

Example request
  ```
{
    "number": 500,
    "layers": 170,
    "nonLayers": 330,
    "sick": 20,
    "healthy": 450,
    "deathRate": "10 daily",
    "productionRate": "400 daily"
}
  ```

Example response
  ```
{
    "birdInfo": {
        "number": 500,
        "layers": 170,
        "nonLayers": 330,
        "sick": 20,
        "healthy": 450,
        "deathRate": "10 daily",
        "productionRate": "400 daily"
    },
    "message": "bird information updated successfully"
}
  ```

