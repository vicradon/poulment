# Post daily record

`POST /api/v1/farms/:ownerId/:id/dailyRecord`
example req.params

```
{
  "ownerId": "5ecf5d6e8f48d91d683ebf04"
  "id": "5ecf5d6e8f48d91d683ebf04"
}
```

Example request

```
{
    "date": "05-27-2020",
    "numberOfBirdsSold": 10,
    "numberOfEggsSold": 400,
    "deaths": 1,
    "newlySickBirds": 5,
    "newlyRecoveredBirds": 10,
    "numberOfEggsProduced": 1000,
    "kgOfFeedConsumed": 20,
    "litersOfWaterConsumed": 300,
    "vaccination": "Some vaccination",
    "currentMedication": "Some medication",
    "feedingCosts": 4000,
    "medicalCosts": 1000,
    "waterCosts": 5000,
    "otherCosts": 300
}
```

Example response

```
{
    "todaysRecord": {
        "_id": "5ed112c96c166904e4bf9e5a",
        "date": "2020-05-28T23:00:00.000Z",
        "numberOfBirdsSold": 10,
        "numberOfEggsSold": 400,
        "deaths": 1,
        "newlySickBirds": 5,
        "newlyRecoveredBirds": 10,
        "numberOfEggsProduced": 1000,
        "kgOfFeedConsumed": 20,
        "litersOfWaterConsumed": 300,
        "vaccination": "Some vaccination",
        "currentMedication": "Some medication",
        "feedingCosts": 4000,
        "medicalCosts": 1000,
        "waterCosts": 5000,
        "otherCosts": 300
    },
    "message": "Successfully added today's record"
}
```

# Update daily record
`PATCH /api/v1/farms/:ownerId/:id/dailyRecord`
example req.params

```
{
  "ownerId": "5ecf5d6e8f48d91d683ebf04"
  "id": "5ecf5d6e8f48d91d683ebf04"
}
```

Example request

```
{
    "date": "05-29-2020",
    "numberOfBirdsSold": 100,
    "numberOfEggsSold": 4000,
    "deaths": 10,
    "newlySickBirds": 5,
    "newlyRecoveredBirds": 10,
    "numberOfEggsProduced": 1000,
    "kgOfFeedConsumed": 20,
    "litersOfWaterConsumed": 300,
    "vaccination": "Other vaccination",
    "currentMedication": "Other medication",
    "feedingCosts": 4000,
    "medicalCosts": 1000,
    "waterCosts": 5000,
    "otherCosts": 300
}
```

Example response

```
{
    "todaysRecord": {
        "_id": "5ed11324b9a5d331b461d22f",
        "date": "2020-05-28T23:00:00.000Z",
        "numberOfBirdsSold": 100,
        "numberOfEggsSold": 4000,
        "deaths": 10,
        "newlySickBirds": 5,
        "newlyRecoveredBirds": 10,
        "numberOfEggsProduced": 1000,
        "kgOfFeedConsumed": 20,
        "litersOfWaterConsumed": 300,
        "vaccination": "Other vaccination",
        "currentMedication": "Other medication",
        "feedingCosts": 4000,
        "medicalCosts": 1000,
        "waterCosts": 5000,
        "otherCosts": 300
    },
    "message": "Successfully updated today's record"
}
```

# Delete daily record

`DELETE /api/v1/farms/:ownerId/:id/dailyRecord/date`

example req.params

```
{
  "ownerId": "5ecf5d6e8f48d91d683ebf04"
  "id": "5ecf5d6e8f48d91d683ebf04"
}
```

Example response

```
{
    "message": "Successfully delete today's record"
}
```
