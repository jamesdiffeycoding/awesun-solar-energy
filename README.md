# Awesun Solar Energy Visualiser

![image](https://github.com/SaraThampi/Solar-Energy/assets/128574441/439e800f-e765-4b1b-89ed-f82bf3962e1d)

Displaying the UK's solar energy production visually \
Design and Code by [James Diffey,](https://github.com/jamesdiffeycoding) [Matt Kirke](https://github.com/mattkirke) and [Sara Thampi](https://github.com/SaraThampi)

<br />
Data from the University of Sheffield Solar API 
https://www.solar.sheffield.ac.uk/pvlive/ 
<br />
Please visit the deployed site: 
https://solar-energy-alpha.vercel.app/

## Inspiration
When someone plugs in their phone, or turns on their kettle, **where does that electricity come from**?
It is easy to overlook the contribution renewable energy sources are make in the UK, and difficult to access the latest production statistics. We were inspired by **[Winderful UK's](https://winderful.uk/)** work to visualise the UK's wind energy production and we wanted to create a sister project.

![image](https://github.com/SaraThampi/Solar-Energy/assets/128574441/37bb18a8-a918-4434-b13b-600277c6ce96)


## What it does
Awesun Solar Energy Visualiser displays the latest solar PV generation statistics in half-hourly increments between the hours of 9am and 5pm. Three views are presented (weekly, monthly and yearly), as well as their peak production statistics for those periods. The size of the sun changes depending on how much energy has been produced on the current day, relative to the annual high.

## Tech Stack
Next.js, Tailwind , HTML, CSS \
We experimented with Apex Charts but decided to code the graphs in Tailwind/CSS/JSX

## How we built it
Solar data was fetched from the University of Sheffield's [solar PV API](https://docs.google.com/document/d/e/2PACX-1vSDFb-6dJ2kIFZnsl-pBQvcH4inNQCA4lYL9cwo80bEHQeTK8fONLOgDf6Wm4ze_fxonqK3EVBVoAIz/pub). To bypass CORS errors, Next JS server-side-rendering was used. The data was filtered to entries between 9am and 5pm to display only typical solar production hours. Client components were used to toggle states of the web-page, for instance to change which graph to display. The application accepts user input for which graph they want to display.

## Challenges
- Fetching data without CORS errors - switched project from React to Next.js so we could fetch data in a server component. 
- Making the design mobile-responsive. 
- Sizing the sun responsively.

## Accomplishments
- Overcoming the CORS errors
- Sorting through a huge amount of data
- Learning about regular expressions
- Creating reusable code blocks

## What We Learned
- How to make the size of the sun responsive using css grid 
- Tailwind and Tailwind animations 
- How to code a graph component

## What's next for Awesun
- Further improving the graphic display,
- Better screen-size responsiveness
- Sharing the project with the API's owners.
