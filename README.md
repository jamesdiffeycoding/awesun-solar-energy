# Awesun

![image](https://github.com/SaraThampi/Solar-Energy/assets/128574441/f0a8c261-d52d-46ca-bb75-1b53c3141696)

Displaying the UK's solar energy production in MW visually \
<br />
Data is fetched from the University of Sheffield Solar API \
https://www.solar.sheffield.ac.uk/pvlive/ \
<br />
Please visit the deployed site: \
https://solar-energy-alpha.vercel.app/

# Inspiration
Winderful's amazing website displaying the UK's wind energy production: \
https://winderful.uk/

# What it does
You can switch between displaying the last week's. last month's or last year's data.
The size of the sun changes depending on the value of the selected solar energy production. \
The graphs show the UK's solar energy production every half hour between 9am and 4.30pm. (Solar energy is not produced at night!) \
<br />
The weekly chart has dividers for every day. \
The monthly chart has dividers for each week/ 7 days. \
The yearly chart has dividers for each month.

# Tech Stack
Next.js, Tailwind , HTML, CSS \
We experimented with Apex Charts but decided to code the graphs in Tailwind/CSS/JSX

# Challenges
- Fetching data without CORS errors - switched project from React to Next.js so we could fetch data in a server component. \
- Making the design mobile-responsive. \
- Sizing the sun responsively.

# Accomplishments
Glowing sun that changes size based on energy consumption / screensize.

# What We Learned
- How to make the size of the sun responsive using css grid \
- Tailwind and Tailwind animations \
- How to code a graph component
