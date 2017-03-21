# Docker-dev
Docker setup with webpack-dev-server, nodemon, and mysql database.

# Notes
nodemon command must include "-L" to allow live reloading

DB_HOST in 'web' service is set to 'db' which represents the IP Address of the 'db' service (in this case the mysql service)

Database should include two mounts:
1) one mount to link the data to a local folder
2) another mount to link the .sql file to the folder specified in the documentation

Environmental variable names vary with database service. 