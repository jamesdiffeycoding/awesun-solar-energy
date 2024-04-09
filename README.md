# Awesun Solar Visualiser

## Inspiration
When someone plugs in their phone, or turns on their kettle, **where does that electricity come from**? 

It is easy to overlook the contribution renewable energy sources are make in the UK, and difficult to access the latest production statistics. We were inspired by **[Winderful UK's](https://winderful.uk/)** work to visualise the UK's wind energy production and we wanted to create a sister project.

## What it does
Awesun Solar Energy Visualiser displays the latest solar PV generation statistics in half-hourly increments between the hours of 9am and 5pm. Three views are presented (weekly, monthly and yearly), as well as their peak production statistics for those periods. The size of the sun changes depending on how much energy has been produced on the current day, relative to the annual high.

## How we built it
Solar data was fetched from the University of Sheffield's [solar PV API](https://docs.google.com/document/d/e/2PACX-1vSDFb-6dJ2kIFZnsl-pBQvcH4inNQCA4lYL9cwo80bEHQeTK8fONLOgDf6Wm4ze_fxonqK3EVBVoAIz/pub). To bypass CORS errors, we used Next JS server-side-rendering. The data was filtered to entries between 9am and 5pm to display only typical solar production hours. Client components were used to toggle states of the web-page, for instance to change which graph to display. The application accepts user input for which graph they want to display.

## Challenges we ran into
The API returns CORS errors when accessed directly from a client browser, so server-side rendering was used to bypass this. Because we don't have access to the server ourselves (it is hosted by University of Sheffield), server-side rendering was the best way around the CORS errors.

## Accomplishments that we're proud of
Responsive sizing, overcoming the CORS errors, sorting through a huge amount of data, learning about regular expressions, and creating reusable code blocks.

## What we learned
Overcoming CORS errors when you don't have own the server can be a challenge. Proxy servers are one common solution to these errors.


## What's next for Awesun
Further improving the graphic display, screen-size responsiveness, and sharing the project with the API's owners.

## Built with
React, Next JS, the University of Sheffield's [solar PV API](https://docs.google.com/document/d/e/2PACX-1vSDFb-6dJ2kIFZnsl-pBQvcH4inNQCA4lYL9cwo80bEHQeTK8fONLOgDf6Wm4ze_fxonqK3EVBVoAIz/pub), server-side rendering.

## Try it out
[Awesun Deployment](https://solar-energy-alpha.vercel.app/](https://awesun-solar-visualiser.vercel.app/)https://awesun-solar-visualiser.vercel.app/)
