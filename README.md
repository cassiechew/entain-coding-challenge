# entain-coding-challenge

This is a response to the entain coding challenge.

This project was scaffolded using expo.

## Running instructions

To run this you will need to 

```
yarn install
```

then 

```
expo start
```

scan the qr code generated, and assuming you have expo, the app should run. 

## Decisions

1. I have assumed that the data I recieve is in order by countdown.
2. There is a design decision that I would probably change which is that i have made each race component responsible for its own unrendering. If I were to do this again, I would likely look to have a map of ids to countdowns in the top level raceView, and delete the components with reference to that map rather than passing down a state change function through props.
3. In order to satisfy requirement on having five races on screen at all times, I have upped the number of races I get from the API to ensure that happens
