# Frontend Mentor - Art gallery website solution

This is a solution to the [Art gallery website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/art-gallery-website-yVdrZlxyA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This project is a front-end web page job interview challenge that involves creating a web page based on a Figma template and integrating a Leaflet map for location. The web page has multiple viewports for mobile and desktop.

The challenge requires the candidate to create a pixel-perfect web page that matches the design of the Figma template. In addition to the design, the candidate is required to use a Leaflet map to display the location of a business on the web page.

The candidate will be expected to use HTML, CSS, and JavaScript to implement the web page and Leaflet map. They will also need to ensure that the web page is responsive and looks great on different screen sizes

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- **Bonus**: Use [Leaflet JS](https://leafletjs.com/) to create an interactive location map with custom location pin

### Screenshot
![front-end-mentor](https://user-images.githubusercontent.com/65675240/224574933-cce47e9b-3cc1-4e29-b15a-563ec28c48b5.PNG)

![front-end-mentor-2](https://user-images.githubusercontent.com/65675240/224574997-4fdeca97-86f2-4a6d-b8f5-7b80d7e6ea67.PNG)

![front-end-mentor-3](https://user-images.githubusercontent.com/65675240/224575070-4626294c-40cd-4b55-961c-eddb55e4f44a.PNG)





### Links

- Solution URL:[solution link](https://github.com/neyneyalldayday/just-a-mock)
- Live Site URL: [live site URL here](https://neyneyalldayday.github.io/just-a-mock/)

## My process
So i have severe adhd so looking at this at the begenning took some time to dig through all the 
information given to me. it was a lot for sure. But once i got all my ducks in a row i laid out the figma page and got a good handle for how the middle ground would look. Usually i do most my personal work with next.js and other react style frameworks but that seemed over kill for what we were doing here, so i went with a simple html css and javscript sandbox. and as stated before i looked to the tablet view to start my layout. i Quickly was reminded about certian variables you dont really run into in a component based frame work. mainly position and height. its typically best to avoid setting a height variable on any element that is responsive and i forgot that ha. because the content always needs somewhere to go. so i was running into overflow issues and things of that nature. after i fixed that i generally just gave all the parent emlememts flex values and worked downward toward the children. then i moved to mobile view since its typically the least painful. and then to desktop view. I trided to solve that chage to the header based off the background. i tried to use a dynamic javascript solution but couldnt get it to work so in the end i just went with a gradient wich doesnt fit the look at all but better than nothing in my mind. Lastly i worked on the map. getting a grey background took some digging since most endpoints were no longer supported. but in the end got it finished. This is by no means perfect but im pretty happy with the result. And just to mention i didnt use any css frameworks on this just flexbox and vanilla css.  
### Built with


- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

as i said before avoid height lol

### Continued development
take it day by day


## Author

- Website - [Rene Trevino]https://neyneyalldayday.github.io/nene-react-portfolio/




