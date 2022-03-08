# entain-coding-challenge

This is a response to the entain coding challenge.

## Decisions

1. I have assumed that the data I recieve is in order by countdown.
2. There is a design decision that I would probably change which is that i have made each race component responsible for its own unrendering. If I were to do this again, I would likely look to have a map of ids to countdowns in the top level raceView, and delete the components with reference to that map rather than passing down a state change function through props.
3. Currently the filtering functions, however the TabBar I wanted to use is not rendering. Currently Fixing.

