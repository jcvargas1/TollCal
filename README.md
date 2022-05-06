# TollCal.com
Website that displays the current and future toll prices for the 91 Express Lanes, live traffic cams from CalTrans, & an iFrame with live traffic provided by Waze.

# Why?

I along with many others use the 91 Express Lanes regularly find it inconvenient to not be able to know the current toll prices unless you view their PDF chart that shows all prices at once. In addition, navigation apps that show the alleged price are typically wrong. Instead of never knowing the cost beforehand or having to rely on a visual chart I created this site. It helps the user be informed of the prices in addition might sway their decision whether or not to wait or even take the toll road at all.

## How it works TLDR;

When the user first visits the website the page will check if the user has the toll data already in local storage and/or if the cache isn't expired. If the data is needed or cache is expired API calls are made which are handled by the node express server. The data is retrieved from AWS RDS that has a Postgres database and then it is cached in browser local storage and is used for different sections of the website. There is a waze iFrame on each section of the site showing tolls that is focused specifically on the stretch of freeway that encompasses the 91 express lanes. The traffic live feed is provided by Caltrans and I embedded the streams into the site. The visual aspect of the site I focused on simplicity and easy readability since the majority of people that would use this would most likely be on the go viewing from a mobile device. 

## Tech Used

**Language/Libraries:** React, Javascript, HTML, CSS/Styled Components, Material UI

**Services**: AWS (EC2 & RDS), Cloudflare

**Tools/Etc.** : Ubuntu, PostgreSQL, Node.js/npm, Express, REST, Nginx, Certbot, Postman, Responsively, VS Code, Bash, Prerender.io (for SEO optimization)


## App Diagram
![Network Diagram](https://github.com/jcvargas1/tollcal/blob/master/preview_images/diagram.png)

## What I would do different

If I were to make this website again I would probably do it using Next.JS as opposed to only React. Next.Js has the advantage of being easier for SEO optimization and the ability to choose where you want the website to be rendered be it server or client is more advantageous overall. In this case I used the SEO optimization site Prerender.io and configured it with Cloudflare in order to have website crawlers notice my website more efficiently. In addition, I would probably try using Redis as well. For the sake of learning I used AWS RDS but it does seem to be overkill for a database with only about 1000 entries and does require more work configuring as opposed to Redis. AWS does privde plenty of services to make development faster such as lightsail, ec2 elastic, lambda, etc and I would consider using if speed and scaling was a priority.

## Future 

If the other toll freeways in the area openly showed their price data like the 91 Express lanes did I would like to also implement those routes too and even create a route calculator. Some of the sites have their own route calculators but they take too much time and can be confusing. I believe making it simpler and faster for the user to view the data they want to see should be a priority. 

Im also interested in seeing the possibility of being able to get the specific time difference between the toll road vs regular freeway via a map/traffic providers API but only for the specific stretch where the toll road is available. It would be interesting to track that data overtime to compare in addition to being able to implement a feature where you can compare the time saved with price (ex: $7 toll and saved 10 minutes therefore you paid .70 cents per minute saved). I believe when you see information like that it can help making a decision whether or not to take the tollroad and also see how much people value their time.

## Website Preview Images
![Home Page](https://github.com/jcvargas1/tollcal/blob/master/preview_images/tollcal_preview.PNG)
![Both Toll Page](https://github.com/jcvargas1/tollcal/blob/master/preview_images/tolls_preview.PNG)
![Live Cams](https://github.com/jcvargas1/tollcal/blob/master/preview_images/livecam_preview.PNG)
![Responsive](https://github.com/jcvargas1/tollcal/blob/master/preview_images/tollcal_responsively.PNG)

