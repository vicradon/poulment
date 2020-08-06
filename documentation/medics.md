# Post bird symptoms

`POST /api/v1/medics/:ownerId/:id/symptoms`
example req.params

```
{
  "ownerId": "5ed1e7843bf93942d40745dc"
  "id": "5ed1eaf22653b13890fa85d5"
}
```

Example request

```
{
	"wateryPoo": true,
	"weaknessInBirds": true
}
```

Example response

```
{
    "currentSymptoms": {
        "wateryPoo": true,
        "weaknessInBirds": true
    },
    "message": "Successfully updated current symptoms"
}
```

# Get recommeded medication

`GET /api/v1/farms/:ownerId/:id/birds/recommended-medication`

example req.params

```
{
  "ownerId": "5ed1e7843bf93942d40745dc"
  "id": "5ed1eaf22653b13890fa85d5"
}
```

Example response

```
{
    "Recommended medication": "None yet",
    "message": "Successfully fetched recommended Medication"
}
```
