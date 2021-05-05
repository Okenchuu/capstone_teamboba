# Team Boba Handoff Documentation

We have chosen to keep our app open source so that other developers in the mental health space can view and use our code in their own projects. There is not much in the way of apps for those suffering from seasonal affective disorder and we created Better Weather, first and foremost, to help people. 

## Stakeholder Notification
As of now, there are no plans to take down Better Weather and the code is available in a public repository(link). If we are going to shut down the website in the future, users will be notified via email three months before the closure date. <br>

A notice will also be posted on our website’s landing page three months before it is set to close detailing the reason for closure and closure date.

## System Shutdown and Data Deletion
Better Weather uses <a href='https://developers.google.com/identity/protocols/oauth2'>Google OAuth</a> for user authentication, <a href='https://chatengine.io/'>Chat Engine</a> to host the chatrooms, and <a href='https://openweathermap.org/api'>OpenWeatherMap</a> ’s APIto retrieve the user’s location to display the weather and travel recommendations. <br>

As a default, Google OAuth access tokens expire after an hour so users will only stay logged in for the duration of the access token lifetime. We do not collect data tied to a user’s Google account and merely use their emails to log them into the chat server built with Chat Engine. Emails are stored in Better Weather’s project account on chatengine.io. We also do not collect or store users’ location data. <br>

On the closure date, information stored on Chat Engine’s website including user accounts, the project (chatroom), and cloud account as a whole will be deleted and all APIs used will be disabled. Of course, users can email any of the team members if they would like their accounts to be deleted in the meantime.

## Converting the Code Repository to a Public Repository
The code for Better Weather is currently on Okenchuu’s(link) public Github repository and will remain accessible to the public. 

