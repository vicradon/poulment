# Get day

`GET /api/v1/days/:ownerId/:id/date`
example req.params

```
{
  "ownerId": "5ed1e7843bf93942d40745dc"
  "id": "5ed1eaf22653b13890fa85d5",
  "date": "05-30-2020"
}
```

example response

```
{
    "day": {
        "_id": "5ed1eccef79f2a40dcbc81db",
        "date": "2020-05-29T23:00:00.000Z"
    },
    "message": "Successfully retrieved day"
}
```

# Get days

`GET /api/v1/days/:ownerId/:id`
example req.params

```
{
  "ownerId": "5ed1e7843bf93942d40745dc"
  "id": "5ed1eaf22653b13890fa85d5",
}
```

example response

```
{
    "days": [
        {
            "_id": "5ed1eccef79f2a40dcbc81db",
            "date": "2020-05-29T23:00:00.000Z"
        }
    ],
    "message": "Successfully retrieved all days"
}
```


# Get days in range

`GET /api/v1/days/:ownerId/:id/q?`
example req.params

```
{
  "ownerId": "5ed1e7843bf93942d40745dc"
  "id": "5ed1eaf22653b13890fa85d5",
}
```
example req.query

```
{
  "from": "05-25-2020"
  "to": "05-30-2020"
}
```

example response

```
{
    "days": [
        {
            "_id": "5ed1eccef79f2a40dcbc81db",
            "date": "2020-05-29T23:00:00.000Z"
        }
    ],
    "message": "Successfully retrieved days in given range"
}
```