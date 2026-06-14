# We need to start with the base image. 
# We can use ubuntu, venv/pip for py, node for nodejs. Then set a nickname/alias
FROM node:22 as builder

# WORKDIR is "cd". example: current directory is container/app
WORKDIR /app

# Copy module list in /app the and install.
COPY package.json . 
RUN npm install

# but WHY? because every code changes will force docker to reinstall every package.

# Now, copy all the code and paste it in the directory which is container/app
COPY . .

# Since we are building the image from react builder we will need to run npm run build.
# but we can also run the "website" by "npm run dev" but thats mostly used in servers
# Building before deploying is the standard since it saves resources and light. 
# Run this to build the app
RUN npm run build

# All build files are now in /app/dist/*

# -----------------------------------------------------------------------------------------------

# Since we are running it on nginx we will need to start over a brand new image
FROM nginx:alpine as runner

# cd to nginx file system 
# this is similar to apache directory which is /var/html/*
WORKDIR /usr/share/nginx/html

# We need to copy the build files "FROM THE BUILDER IMAGE" to the current directory. 
COPY --from=builder /app/dist .

# Expose port 80 which is the default port for Nginx
EXPOSE 80 
# Its telling the server that this container listens on port 80

# IMPORTANT: This option tells Nginx to run in the foreground. Docker expects the main process to stay running.
CMD [ "nginx", "-g", "daemon off;" ]

# To run this, we need to build the image first.
#    $ docker build -t "appName" .
# -t is tag. Like a name tag :> 

# Then we run it by running this command.
#   $ docker run -p 8080:80 appName
# The format is HostPort:ContainerPort.
# Take traffic arriving at port 8080 on my computer and forward it to port 80 inside the container.

# If you are running a backend server, you need to keep this in mind.
# HostPort is the port in the computer
# ContainerPort is the port that the container is listening to.
# So your server app port should be the container port.
