# Friend_Finder
Week 13 Express.js Homework

# Friend Finder Using Node & Express

## Overview

This is a Friend Finder application where the user answers 10 survey questions and compares the results to other users on the app in order to find a Friend Match. That `score` for you vs another user is determined is the difference of the individual responses of each question where the absolute values are totalled for all the answers which gives your match a score.

It uses HTML/CSS/Javascript and Bootstrap on the front end and Node/Express on the backend.

## Links

* [Live Heroku Site](https://git.heroku.com/aqueous-plateau-53814.git)
* [GitHub for this](https://github.com/PatrickShea814)

## Technologies Used

* [x] HTML/CSS/Javascript/JQuery/Bootstrap
* [x] Node.js, Express, Path
* [x] Heroku & Github

## Screenshots



### Design

1. The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. `htmlRoutes.js` serves up the html files.

3. `apiRoutes.js` handles all the data and responds with JSON data.

4. Data is saved in the `app/data/friends.js` file of as an array of objects.
  
5. The user's most compatible friend is determined by calculating a score for each friend. Each answer the user picks is compared to each answer of another user and taking the absolute value of those differences which are then totalled for an overall match `score`. 

6. The user's most compatible friend is displayed the result as a modal pop-up.
   * The modal displays the name and picture of the user's closest match.

7. The user who took the survey is then added to the array in `app/data/friends.js` to be compared to future users. (Not functional once closing the app due to a Database not being setup.)
