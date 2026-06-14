# Lessons

1. Container - is an instance of the "service" in an isolated virtual environment that we can run.
2. Image - is a package of the app and its instructions a.k.a "dockerfile"
3. Dockerfile - is the instructions for docker image build
4. HOW DOCKER WORKS? - Read on how does docker work in the .dockerfile

# How to run a docker

## Build the image first.

```bash
docker build -t "appName" .
```

"-t" is tag. Like a name tag :>
"." is the directory path

```bash
docker run -d -p 8080:80 --name website appName
```

"-d" (optional) - to run the container in the background.
"--name" (optional) - to give the friendly name to the container
"-p" (required) - port (host port : container port)
"appName" (required) is the image's name to run.

# Useful docker commands

## How to display all running docker containers:

```bash
docker ps -a
```

"-a" (optional) - to view exited or stopped containers

## How to view logs in a docker container:

```bash
docker logs -f appName
```

"-f" (optional) - to continously watch logs

## How to stop a container:

```bash
docker stop appName
```

## How to restart a container:

```bash
docker restart appName
```

## How to delete a container:

```bash
docker rm appName
```

## How to delete an image.

```bash
docker images # to view images
docker rmi appName # to remove image.
```

# Rebuild after code changes

```bash
docker build -t appName . # Rebuild the image
docker stop appName # Stop previous version of container
docker rm appName # Remove container
docker run -d -p 8080:80 --name appNameAlias appName # Run container
```
