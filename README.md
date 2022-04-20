# TollCal.com
Website that displays the current and future toll prices for the 91 Express Lanes, live traffic cams from CalTrans, & an iFrame with live traffic provided by Waze.

# Why?

I along with many others use the 91 Express Lanes regularly find it inconvenient to not be able to know the current toll prices unless you view their pdf chart that shows all prices at once. In addition, navigation apps that show the supposed price are typically wrong. It helps the user make a decision whether it's even worth to take the toll now or wait until later.
## How it works TLDR;

When the user first visits the website the page will check if the user has the toll data already in local storage and if the cache isn't expired. If the data is needed or cache is expired API calls are made which are handled by the node express server. The data is retrieved from AWS RDS that has a Postgres database and then it is cached in browser local storage and is used for different sections of the website.

## Tech Used

**Language/Libraries:** React, Javascript, HTML, CSS/Styled Components, Material UI

**Services**: AWS (EC2 & RDS) | Cloudflare

**Tools/Etc.**: Ubuntu, PostgreSQL, Node.js, npm, Express, Nginx, Postman, Responsively


## App Diagram
![Network Diagram](https://github.com/jcvargas1/tollcal/blob/master/diagram.png)
