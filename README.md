# Data server for bothack.berlin

This repository provides a small server that manly acts
as a proxy for challenge data servers.

## Routes

### GET /secrets

Returns the `secret.json` that has also been handed out over the #bothack slack team.

### GET /telefonica

Exposes [all the routes of the Telefónica data server][telefonica-server].

E.g. `/telefonica/users/1234`.

[telefonica-server]: https://github.com/bothackBerlin/bothack-telefonica-data-server#routes

### GET /ingdiba

Exposes [all the routes of the ING-DiBa data server][ingdiba-server].

E.g. `/ingdiba/users/1234/transactions`.

[ingdiba-server]: https://github.com/bothackBerlin/bothack-ing-diba-data-server#routes

## Starting the server

Clone this repo and run:

```bash
yarn # or your classic `npm install`
node bin/server
```
