
See for original refference:
https://testdriven.io/courses/taxi-react/


# How to run this repo locally with docker:

Get repo:
- Set up ssh for your github accoutn if not yet.
- `git clone git@github.com:jonndoe/taxi-react-app.git`
- `cd taxi-react-app`

Start up all containers:
- `sudo docker-compose up --build`

Login to database container:
- `sudo docker-compose -f docker-compose.yml exec taxi-database psql -U postgres`

Create `taxi` and `test` databases and `taxi` user:
- `CREATE USER taxi WITH PASSWORD taxi;`
- `CREATE DATABASE taxi OWNER taxi;`
- `CREATE DATABASE test OWNER taxi;`

Exit the database container:
- `\q` or press `Ctrl + D`

Migrate the database:
- `sudo docker-compose -f docker-compose.yml exec taxi-server python manage.py migrate`

Go to `127.0.0.1:8080` and see app is running.


# Testing the app with multiple accounts (riders and drivers):

Install `Firefox Multi-Account Containers` application and open new container for each user.

# Run this app with OpenStreetMap instead of Google Maps:

Todo (in progress)






