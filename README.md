
See for original refference:
https://testdriven.io/courses/taxi-react/

# Run in production with docker(not yet complete):

Get repo:
- Set up ssh for your github accoutn if not yet.
- `git clone git@github.com:jonndoe/taxi-react-app.git`
- `cd taxi-react-app`

Start up all containers:
- `sudo docker-compose -f docker-compose.prod.yml up --build`

Login to database container:
- `sudo docker-compose -f docker-compose.prod.yml exec taxi-database psql -U postgres`

Create `taxi` and `test` databases and `taxi` user:
- `CREATE USER taxi WITH PASSWORD 'taxi';`
- `CREATE DATABASE taxi OWNER taxi;`
- `CREATE DATABASE test OWNER taxi;`

Exit the database container:
- `\q` or press `Ctrl + D`

Migrate the database:
- `sudo docker-compose -f docker-compose.prod.yml exec taxi-server python manage.py migrate`

Go to `127.0.0.1:8080` and see app is running.



# Run locally with docker:

Get repo:
- Set up ssh for your github accoutn if not yet.
- `git clone git@github.com:jonndoe/taxi-react-app.git`
- `cd taxi-react-app`

Start up all containers:
- `sudo docker-compose -f docker-compose.yml up --build`

Login to database container:
- `sudo docker-compose -f docker-compose.yml exec taxi-database psql -U postgres`

Create `taxi` and `test` databases and `taxi` user:
- `CREATE USER taxi WITH PASSWORD taxi;`
- `CREATE DATABASE taxi OWNER taxi;`
- `CREATE DATABASE test OWNER taxi;`

Give permissions for `taxi` user (to run backend tests):
- `ALTER USER taxi CREATEDB;`

Exit the database container:
- `\q` or press `Ctrl + D`

Migrate the database:
- `sudo docker-compose -f docker-compose.yml exec taxi-server python manage.py migrate`

Set permission for client/node_modules folder (for fronted testing):
- `cd client`
- `sudo chmod -R 777 node_modules/`

Install Cypress:
- `cd client` you have to be in client directory
- `npm install cypress --save-dev`
- `npx cypress open` now you can run all tests, they should pass.

Clean the test database after each Cypress test run:
- `sudo docker-compose exec taxi-database psql -U taxi -d test`
- `TRUNCATE trips_user CASCADE;`


Go to `127.0.0.1:8080` and see app is running.


# Testing the app with multiple accounts (riders and drivers):

Install `Firefox Multi-Account Containers` application and open new container for each user.

# Run this app with OpenStreetMap instead of Google Maps:

Start Graphhopper server locally:

- https://github.com/jonndoe/graphhopper/blob/master/README.md

Embed OpenStreetMaps into this app:
- Todo (in progress)


# NOTES:

- React client is set up for prod build (serving React static files inside separate nginx container)




