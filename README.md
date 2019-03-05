# 👩🏽‍💻 entr challenge
I had a lot of fun writing this challenge 😊

## Deployed App (Heroku)
https://entr-challenge.herokuapp.com/

## Approach
I began by setting up a simple file structure for the app, with the main components in App being a Header and a Dashboard that included a CompanyList, as well as some demo data to populate users and company. As I continued writing, I wanted to make the code more modular, so I separated CompanyListItem out by making it a new component required by CompanyList. I also made a fresh component called UserSelect for the new companies that would be added by a user. All props were passed down by the parent, CompanyList. Once that was done, I refactored to make my solution as clean as possible, commented my logic, then deployed to Heroku.

## TODO
If this had been a real app, I would have included the following: 
- **Back-end persistence**
- **Form validation** -- I already decided to disallow entering a new company with no title input. I would have included character restrictions, count restrictions, checking for type (integer, string), and any other necessary checks
- **More advanced UI** -- I made the UI clean but did not focus on it as much as I would have in a real app (nicer header, bg, colour scheme, animations, etc.)
- **More advanced user functionality** -- such as login, add/remove users, user dashboard
- **More company attributes** (e.g. customized avatars)

## Thank you!
