# Better Weather
Welcome to our INFO490 & 491 Capstone, Team Boba's working repository! <br/>

## Project Info
Today, Seasonal Affective Disorder affects more than 15 million people in the U.S., with women four times more likely to be diagnosed with it than men. At the same time, the current pandemic makes more people live under limited social interaction and reduced sunlight exposure, which are leading factors that could cause/exacerbate SAD. <br/>
This designed solution, Better Weather, is a website that merges basic chat and recommendation features in order to give supports and help sufferers combat SAD. Through its different feature pages, users have the chance to foster connectedness& peer support, stress relief, increase possible light exposure, and ultimately improve their mood.<br/>
<a href='https://okenchuu.github.io/capstone_teamboba/landing.html'>Link to webpage</a>
<br>

### Project Research
In order to determine the design and features we wanted to include in our webapp, we pored over articles related to seasonal affective disorder, treatments, and what effect the weather has on a person's mood. We also conducted thorough interviews with those who suffer from SAD to get firsthand accounts of what living with SAD is like and also to gauge the effectiveness of possible app features. 

## Getting Started: Installing
While majority of this project is built using Javascript, the Chat page is constructed using React. NPM is the platform need to develop any ReactJS application. The <code>node_modules</code> directory is not a part of a cloned repository and should be downloaded using the <code>npm install</code> command to download all the direct and transitive dependencies. After cloning the repository, remember to do the following:

```
# make sure that you are in the root directory of the project, use" pwd" or "cd" for windows

npm install
```

It will take some time to download all the dependencies into a <code>node_modules</code> directory, and after the download completion, run the Chat Engine React project locally by:

```
npm start
```

## App Structure
<span style="font-size:17px;">**Frontend: JavaScript, CSS, HTML**</span><br>
The whole project is constructed by using HTML, CSS, and Javascript, which are great for multiple reasons, including:<br>
<ul>
<li>Relatively easy to learn</li>
<li>Offer plenty of flexibility and creativity </li>
<li>The backbone of Front End development</li>
<li>Plenty of libraries to use</li>
</ul>
There are downsides to this, however, including:
<ul>
<li>The browser interprets JavaScript differently in different browsers</li>
<li>Lack of debugging facility </li>
<li>Since the JavaScript code is viewable to the user, others may use it for malicious purposes</li>
</ul>
<strong style="font-size:17px;">Backend:</strong><br>

<span style="color: red">Better Weather uses <a href='https://chatengine.io/'>Chat Engine</a> to host the chatrooms. Chat Engine's API makes it easy to add chat functionality within an app. Better Weather uses it to store user profiles and to display the chatroom UI. Chat Engine's free tier allows you to create up to 25 user accounts, but any more than that requires purchase of one of the paid tiers. We were able to get by on the free tier.</span><br>

### * Need to add information about Google OAuth and OpenWeatherMap's API *<br><br>

<strong style="font-size:17px;">The code</strong><br>
The code are under the folders <code>/src</code> and <code>/public</code>. The Chat Engine we constructed in our app in using React, and the rest functions are based on JavaScript, including <code>index.js</code>, <code>app.js</code>, <code>travel.js</code>, and <code>music.js</code>. The construction of the webpage under HTML is under <code>/public</code> folder, including <code>index.html</code>, <code>landing.html</code>, <code>aboutus.html</code>, <code>music.html</code>, and <code>travel.html</code>. Images we use in under <code>/public/img</code>, and datasets we have in under <code>/public</code> in two different formats, which are <code>.json</code> and <code>.csv</code>.

### *add section explaining travel functions and city dataset we currently use*

## Team Members
<span style="font-size:17px;">**Nina(Xiying) Zhang**</span><br>
Role: PM, Frontend<br>
Email: xz67@uw.edu

<span style="font-size:17px;">**Zhan Wu**</span><br>
Role: Data Analyst, Backend Developer<br>
Email: wz0805@uw.edu

<span style="font-size:17px;">**Zachary Tan**</span><br>
Role: Backend Developer<br>
Email: zht@uw.edu

<span style="font-size:17px;">**Michelle Gouw**</span><br>
Role: Frontend, Backend Developer<br>
Email: gouwm@uw.edu

## Handoff Documentation
<a href='https://github.com/Okenchuu/capstone_teamboba/blob/main/documentation/Handoff.md'>See Here</a>

## License
This project is licensed under the MIT License - see the <a href='https://github.com/Okenchuu/capstone_teamboba/blob/main/LICENSE.md'>LICENSE.md</a> for details
