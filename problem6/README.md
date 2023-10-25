# API Service Module Specification

### 1: Overview module
    - This api service module serve for a backend application server
    - this module receives score update request from user authenticated and manages the top 10 user's scores. 
    - It provides api for client to retrieve and update scores

### 2: Purpose
    - Show top 10 user's scores for everyone visits website
    - Authenticated user, allow to update score of user if Authentication success

### 3: Requirements
    - Receive score update requests from authenticated clients
    - Validate requests and authorize score modifications
    - Update scores in the database and live recalculate top scores list
    - Expose endpoints to retrieve top scores

### 4: Technology use
    - Program language: any languages (For me, I choose TypeScript, nodejs)
    - Database: depend on system, if only have this module, i think, both `nosql or sql` are oke
    - Because system require live update of the score board. So i recommend use socket.io for realtime update (Every time any user takes action, we emit event call api get top 10 user's scores and visible to every users who visits the website)
    - authentication user: use JWT (Simple and easy to use for user authentication)

### 5: API interfaces
    - api get: /my-score/:userId (API to get authenticated user score)
    - api get: /top-score (Api get top 10 user's score board)
    - api put: /update-score/:userId (Api update score for user when takes action)

    Above is the main api usage for this module. Here I do not mention the auth api because it only carries the authentication factor, not the main factor in the module.

### 6: Sequence diagram
![image](https://drive.google.com/uc?export=view&id=1zqKSH8ZD72a6Zd95X-pSDGFjwcAWu1hZ)

- Explain sequence diagrams
- Step1:
  - When user visit the website.
  - Request authentication send to server.
  - If user authenticated, both api get top 10 user's scores and api get score of user authenticated called and response for client.
  - if user authenticated fail. Only api get top 10 user's scores returned to user visit

- Step2:
  - When user takes a action to increase scores.
  - Request authentication send to server.
  - If user authenticated, api update score for user auth is called and after update success, server emit event to call api get top 10 user's scores to return list top user score newest for every visit website
  - if user authenticated fail. Don't allow update score and request user login to authentication
  => Try step2 again
