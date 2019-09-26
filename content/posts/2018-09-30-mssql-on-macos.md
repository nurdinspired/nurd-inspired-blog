---
title: MSSQL on macOS
subtitle: MSSQL 2017 on macOS
category:
  - macOS
  - MSSQL Server
author: Josh Campos
date: 2018-09-30T14:00
featureImage: /uploads/post/2018-09-30-mssql-on-macos/mssql-on-macos-banner.png
---

# Intro

If you haven't seen Microsoft's latest [Docs][msdocs] site update, you really should check them out. They have a decent getting started article regarding [SQL Server Containers on Linux][msdocssql] and other OS's including Azure. This post will go over the detail steps on setting up a locally running SQL Server (2017) instance on your OSX Machine.

## Step 1: Installing Docker

---

### (If you have Docker already installed Skip to step 2)

Hopefully you have a working knowledge of Docker. If you don't, let's walk through the steps of setting up a Community Edition version of Docker for Mac. Download the free Community Edition from the [Docker Store](https://store.docker.com/editions/community/docker-ce-desktop-mac).

![Docker for Mac install](/uploads/post/2018-09-30-mssql-on-macos/docker_mac_install.png)

You may be required to create an account in order to download the .dmg file. Once downloaded, start the .dmg file and drop the file into your Applications folder to install it.

![Docker Mac Drag Drop](/uploads/post/2018-09-30-mssql-on-macos/docker_mac_dragdrop.png)

### Configure Docker Preferences

![Docker Preferences](/uploads/post/2018-09-30-mssql-on-macos/docker_mac_menu_preferences.png)

Microsoft's original article I linked in the intro specifies system preferences as the following:

- **Docker Engine 1.8+**
- **Minimum of 2 GB of disk space**
  - _(Common sense sense says you'll disk space will increase with the size of your DB.....)_
- **Minimum of 2 GB of RAM**
  - _(I prefer to extend to 4GB if you'll be using this heavily in testing and supporting other local apps)_

![Docker System Resources](/uploads/post/2018-09-30-mssql-on-macos/docker_mac_system_resources.png)

> FYI: Any System resource changes will require a Docker Restart.

## Step 2: Setup the SQL Container

---

At this point, Docker is installed. If it isn't running already, double click the Docker App Icon in the Applications folder.

You will see the Docker _whale_ icon in the toolbar. Opening it will show the status.

![Docker Running](/uploads/post/2018-09-30-mssql-on-macos/docker_mac_running.png)

With Docker running, let's open a terminal window to execute the next series of commands.

We will pull down the SQL container image from the Docker Hub with the following command:

`docker pull microsoft/mssql-server-linux:2017-latest`

![Docker Sql Image Terminal](/uploads/post/2018-09-30-mssql-on-macos/docker_mac_sqlImage_pull.png)

Now we need to run the container to setup the SQL instance.

```
sudo docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<YourStrong!Passw0rd>' \
   -p 1433:1433 --name sql1 \
   -d mcr.microsoft.com/mssql/server:2017-latest
```

Run the command above to initialize the following:

| Parameter | Description                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| -e        | Environment variables for the Docker Container: (1) End user licensing agreement, (2) specify SA Password (REMEMBER THIS!) |
| -p        | Docker host port number (first) and Docker exposed port number (second)                                                    |
| --name    | Specify the name of the Docker container. This must be a unique name for each container Docker is running.                 |
| -d        | Executing the SQL 2017 image                                                                                               |

The Docker image will be downloaded if it isn't already, then it's installed, and initialized with the flags in the command.

From the screenshows below, the next command `docker container ls` will list the containers in your Docker instance. You can see that the name you specified in the command statement is now listed.

![Docker Run](/uploads/post/2018-09-30-mssql-on-macos/docker_mac_run.png)

## Step 3: Connecting to MSSQL

---

The database container has been created but we need to get into the container and create our new database.

### Connect via Command Line

Connect to the container:

`docker exec -it sql1 "bash"`

Once in the container, you'll have a `:/#` prompt.

Now we can connect to the SQL Instance:

`/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<YourNewStrong!Passw0rd>'`

![Docker Container Connect](/uploads/post/2018-09-30-mssql-on-macos/docker_mac_connect_container.png)

You can leave out the `-P` flag and you will be prompted for the password. Once connected to the SQL instance, you will now have the `1>` prompt.

A simple script in the SQLCMD prompt can be tested with the following:

```
SELECT Name FROM Sys.Databases;
Go;
```

In the screenshot above you can see the list of databases that exist in our DB instance.

From within the SQLCMD prompt, you can feed any T-SQL statement followed with the `GO` statement to run the command.

## Summary

---

If you followed along with this walkthrough, you:

- Downloaded and Setup Docker for Mac (Community Edition)
- Pulled the SQL 2017 Image
- Ran and initialized a new SQL Database Instance
- Connected to the new Docker container and SQL Command Prompt to interact with the SQL Database

[msdocs]: https://docs.microsoft.com/en-us/
[msdocssql]: https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?v