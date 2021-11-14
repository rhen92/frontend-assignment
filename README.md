# Timescale Frontend Interview Assignment

## Developer
<table>
    <tr>
        <td><a href="https://github.com/rhen92">Rachel Hendricks</td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/76266623?v=4" alt="R. Hendricks" width="125" height="auto" /></td>
    </tr>
</table>

## Installation
1. Clone down this [repo](https://github.com/rhen92/frontend-assignment)
2. `cd` into project directory
3. Run `npm i` to install all project dependencies
4. Run `npm start` to begin the server
5. Application should open in default browser window (if not, navigate to http://localhost:3000)

## Assignment

![Home Page](https://media.giphy.com/media/lIuIxRf67csFtLpc3A/giphy.gif)

![Search Bar](https://media.giphy.com/media/SXWFaK80tD0Dsp58bl/giphy.gif)

I built a movie discovery app in React. This app
displays movies in a grid and gives the user more information when they click on
one of the posters. To fetch the movie info, I used [The Movie DB][movieDB].

### Features

The main features that I implemented
- On the initial visit to the site, it will show the most recent movies
- Allow users to put in a search term and display matches from the movie database in the same grid
  - Matches should come from an API call, not filtering prior downloaded results  
- When a user clicks on one of the cards, open a modal and display more information about the movie


[movieDB]: https://developers.themoviedb.org/3/getting-started/introduction
[figma]: https://www.figma.com/file/KKkrDYSUAuRavpqRingRdZ/Movie-Grid?node-id=0%3A1
