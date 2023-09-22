# Styrtregn - A weather forecast web application

Styrtregn is an interactive web appliaciton for weather forecasts. It utilizes the MET Weather API to gather forecast data about any location that a user chooses.

## Prerequisites

- Node.js v20.5+
- npm v9.8+

## Running the web application

Run the following commands to run Styrtregn:

```
cd [directory of local repository]
cd Prosjekt-1
npm install
npm run dev
```

## Testing

Run the following commands to run the unit tests on Styrtregn:

```
cd [directory of local repository]
cd Prosjekt -1
npm install 
npm run test
```

## HTML Web storage api
The application implements localstorage to save favourites. These are saved by pressing the heart-button.
Sessionstorage storage is not implemented as it wasn't viewed as relevant to the application.


## Bugs on virtual machine
After loading the project on the VM, there is a bug present in the favorite icons. When you search for a new city, without going back to the home page, the value of the button will not change. Therefore, a city might appear as a favorite even if it is in fact not a favorite. This works locally, but not on the VM. 
