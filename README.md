# An example project for AU

## Overview

This is a shopping cart experience built using Gatsby, DatoCMS, Snipcart, and Docker. Gatsby utilizes the package `gatsby-source-datocms` to pull in products created in the headless cms via `https://quickcart.admin.datocms.com/`. Which is then pulled into gatsby via GraphQL queries. Then it is mapped out in a list of products. Then utilizes a Gatsby Snipcart plugin to add a shopping cart experience `gatsby-plugin-snipcart` on build. This project is wrapped in Docker to maintain it but docker is very new to me so it is a very basic wrapper and not utilizing versioning or any of the key benefits of Docker.

## Install

1. open your teminal of choice and run `git clone git@github.com:hyliancoder/kwikcart.git`
2. move into the directory via `cd kwikcart`
3. build the docker image locally via the dockerfile by running `docker-compose up --build`


## Products

to get access to CRUD of products please request access to DatoCMS `https://quickcart.admin.datocms.com/`.