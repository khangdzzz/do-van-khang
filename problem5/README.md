# Problem5 in challenge

## Tech used in this project
    + Docker
    + nodejs
    + Typescript
    + Mongodb

## The way to run project
    1: Because project to demo for your company, so i push .env file to github for easy testing
    2: After clone this project. make sure your computer have docker, docker compose installed
    3: Run `docker-compose up -d` (-d is an optional, remove this flag if you don't want to see log in future)

## This project have 5 apis
    - post: /v1/resource/create : create new resource

    - post: /v1/resource/filter-by-name :  filter by name (type filter: search full text)
    example: resource have name: "jenny"
    when call api with data search: "jen" => search success

    - get: /v1/resource/detail-resource : search detail resource by id

    - update: /v1/resource/update: update resource by id

    - delete: /v1/resource/:id : delete resource by id
