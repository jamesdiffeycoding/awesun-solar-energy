# [Awesun Solar Energy](https://awesun-solar-visualiser.vercel.app/)

Researchers at the University of Sheffield host an [API](https://docs.google.com/document/d/e/2PACX-1vSDFb-6dJ2kIFZnsl-pBQvcH4inNQCA4lYL9cwo80bEHQeTK8fONLOgDf6Wm4ze_fxonqK3EVBVoAIz/pub) for current solar energy production data in the UK. I wanted to build a front-end tool to help people demonstrate the value and nature of solar energy using their data.

Awesun Solar Visualiser displays the latest solar PV generation statistics in half-hourly increments.

In the weekly and monthly views, production is displayed for 9AM-5PM. In the yearly view production is displayed for 2PM (which is when generation is usually greatest). Daylight savings time adjustments are ignored.

The sun and clouds are both animated and adjusted dynamically to the size of the last data bar hovered. Cloudy days with little sun correspond to low solar energy generation, while clear days with considerable sunlight correspond to high solar energy generation.

# Technical considerations

This project was built with React, Next JS and Tailwind CSS.

- React's useState hook and prop sharing between components facilitate clean animation effects.
- The Page.js file manages all server-side code: fetching the data from the API. This reduces the load on the client and helps to bypass CORS errors which can arise from client-side fetches.
- A single fetch request for a year's worth of data is made to the API which is then filtered to provide weekly and monthly views (rather than making 3 separate requests to the server).
- The SolarApp component manages all client-side state management and event handling (e.g. effects triggered when the graph chosen changes or data bars are hovered).
- Code has been simplified as much as possible reducing prop-drilling and creating neatly organised or nested components for readability.
- Absolute positioning ensures a consistent presentation of the graph elements at the base of the page.
- Accessibility has been preserved through font-colours chosen for contrast with the background gradient.
- Responsiveness has been designed-in with various UI features that change visibility or position depending on screen size.

# Other design decisions

- A useEffect hook could have been used for updating the sunSize state and cloudOpacity state when the last 'barHovered' changed. However, I found this not to be necessary and only cluttered the codebase.
- A useContext hook could have been used for sharing the fetched data among components. Usually this helps to avoid the clutter created by deep prop-drilling. However, I found this not to be necessary as I managed to organise the code into just 'three generations' - as shown in the component structure below.

# Component structure

- GRANDPARENT: Page.js (server-side fetch for data, passed as props to SolarApp)
- PARENT: SolarApp (client side component with all state management and data passed down to child components)
- CHILDREN: Header, Sun, Clouds, GraphSelector and Graph components (receive all props from SolarApp)

# Suggest improvements

If you have ideas for how to improve this work, please let me know at diffeyj@outlook.com.
