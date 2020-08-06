# Get Farms

`GET /api/v1/auth/farms/:ownerId`

Example response
Status Code: 200

```
{
  "farms": [
      {
          "employees": [],
          "_id": "5ece14f500234309349a705b",
          "name": "test farm1",
          "ownerId": "5ece148600234309349a705a",
          "days": [],
          "__v": 0
      },
      {
          "employees": [],
          "_id": "5ece159100234309349a705c",
          "name": "test farm2",
          "ownerId": "5ece148600234309349a705a",
          "days": [],
          "__v": 0
      },
      {
          "employees": [],
          "_id": "5ece15a100234309349a705d",
          "name": "test farm3",
          "ownerId": "5ece148600234309349a705a",
          "days": [],
          "__v": 0
      }
  ],
  "message": "Successfully retrieved farms"
}
```

# Create Farm

`POST /api/v1/auth/farms/:ownerId`

Example request

```
{
  "name": "test farm1"
}
```

Example response
Status Code: 201

```
{
  "farm": {
      "employees": [],
      "_id": "5ece14f500234309349a705b",
      "name": "test farm1",
      "ownerId": "5ece148600234309349a705a",
      "days": [],
      "__v": 0
  },
  "message": "Successfully created the farm"
}
```

# Update Farm

`PATCH /api/v1/auth/farms/:ownerId/:id`
Example Req.params

```
{
ownerId: 5ecf5d6e8f48d91d683ebf04
id: 5ed0175816d41d35bc82188d
}
```

Example Request

```
{
"name": "not deployed"
}
```

Example Response

```
{
  "farm": {
      "employees": [],
      "_id": "5ed0175816d41d35bc82188d",
      "name": "not deployed",
      "ownerId": "5ecf5d6e8f48d91d683ebf04",
      "days": [],
      "__v": 0
  },
  "message": "successfully updated farm"
}
```

# Delete Farm

`DELETE /api/v1/auth/farms/:ownerId/:id`

Example Response

```
{
  "message": "successfully deleted farm"
}
```
