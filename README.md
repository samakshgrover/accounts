# Accounts

## Setup

1. Clone the repository, install node packages and start project

```shell
git clone <GIT REPOSITORY>
cd accounts
yarn
yarn start
```

## Database setup

```
Start psql terminal: -`sudo -u postgres psql`
Create database: - `create database <db_name>;`
Create user: `createuser <db_user>;`
ALter user: `alter user <db_user> with encrypted password '<db_password>';’
Grant permission on database to user: `grant all privileges on database <db_name> to <db_user> ;`
```

## environment variables

```PGUSER=<db_user>
PGHOST=<localhost>
PGPASSWORD=<db_password>
PGDATABASE=<db_name>
PGPORT=<db_port>
```

## Endpoints

```curl
base_url: http://localhost:8080
1. Health: GET /
2. Create user: POST /api/users body : { "name":"<user_name>", "email":"<user_email>, "password":"secure_passoword"}
3. Get user: GET /api/users/:id , // id = user_id
4. Get all users: GET /api/users/all
5. Get active users: GET /api/users/active
6. Get inactive users: GET /api/users/inactive
7. Get update user: PATCH /api/users/:id  body: {"name": "<changed_name>", "isActive":true/false}
```
