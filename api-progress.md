# Open APIs

- [x] POST /api/v1/auth/signup
- [x] POST /api/v1/auth/login
- [] POST /api/v1/auth/password-reset
- [] PATCH /api/v1/auth/password

# Protected APIs

## Farm APIs

Basic Structure: /api/v1/ownerId/

/api/v1/ownerId/farms

- [x] POST /api/v1/ownerId/farm
- [x] GET /api/v1/ownerId/farm
- [x] GET /api/v1/ownerId/farms/:id

/api/v1/ownerId/id/birds

- [x] POST /api/v1/ownerId/id/birds
- [x] PATCH /api/v1/ownerId/id/birds
- [x] GET /api/v1/ownerId/id/birds

/api/v1/ownerId/id/daily-record

- [x] POST /api/v1/ownerId/id/daily-record
- [x] PATCH /api/v1/ownerId/id/daily-record
- [x] DELETE /api/v1/ownerId/id/daily-record

/api/v1/ownerId/id/days

- GET /api/v1/ownerId/id/days/:date
- PATCH /api/v1/ownerId/id/days/q?

/api/v1/ownerId/id/medics

- GET /api/v1/ownerId/id/medics/current-recommended-medication
- POST /api/v1/ownerId/id/medics/symptoms

/api/v1/accounting/:ownerId/:id

- GET /api/v1/accounting/:ownerId/:id/expenditure
- GET /api/v1/accounting/:ownerId/:id/expenditure/q=
- GET /api/v1/accounting/:ownerId/:id/expenditure/date
- GET /api/v1/accounting/:ownerId/:id/income
- GET /api/v1/accounting/:ownerId/:id/income/q=
- GET /api/v1/accounting/:ownerId/:id/income/date
- GET /api/v1/accounting/:ownerId/:id/balance

/api/v1/ownerId/id/users

- GET /api/v1/ownerId/id/users
- GET /api/v1/ownerId/id/users/employees
- DELETE /api/v1/ownerId/id/users/:id
- GET /api/v1/ownerId/id/users/:id
- PATCH /api/v1/ownerId/id/users/:id
- GET /api/v1/ownerId/id/users/:id/tasks
- POST /api/v1/ownerId/id/users/:id/tasks
- POST /api/v1/ownerId/id/users/:id/report-form
- PATCH /api/v1/ownerId/id/users/:id/report-form
