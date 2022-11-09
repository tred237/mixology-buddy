# Mixology Buddy

This React app lets the user catalog their favorite cocktails. This code is not meant to be monetizable or for commercial use.

## Installation

1. To access the functionality of this app, you will need to fork and clone the back end repositiory from [here](https://github.com/tred237/json-server-template). (The instructions to get this working is located in the README)

2. After setting up the back-end, you need to Fork and Clone this repository
   
  	![image](https://user-images.githubusercontent.com/103388556/189546584-8ec5fef7-4d7d-4c47-ae6b-f6e6ae834a69.png)
  
	![image](https://user-images.githubusercontent.com/103388556/189546761-f0f05411-1967-46c7-b081-063bc6951ae0.png)

3. Copy the SSH key from the forked repository.

	![image](https://user-images.githubusercontent.com/103388556/189546817-4d32dcbb-e79e-4220-8fc2-c573d21e9cc1.png)
  
4. In your terminal, create a new directory, navigate to it, and clone the repository using the SSH key you copied from the fork.
	```
	mkdir mixology-buddy-folder
	cd mixology-buddy-folder
	git clone <pasted-ssh-key>
	```
5. In that same directory, install your dependancies using `npm install`
	
## Usage

1. In your terminal, navigate to the folder where you cloned the back-end repository and run `npm run dev` to start your json-server. The output should confirm that the server has started and will provide you with the localhost URL and port that the sever is running on:

	<img width="339" alt="image" src="https://user-images.githubusercontent.com/103388556/200951311-2c200060-8e2c-403e-a308-e30327445f8f.png">
	
2. In another terminal window, navigate to the folder where you cloned the front end rep and run `npm start` to start the front-end. You may be asked if you want to run the app on a different port. If so, enter `y`.

	<img width="452" alt="image" src="https://user-images.githubusercontent.com/103388556/200952535-9497418b-0074-45aa-815b-e180bf663bd7.png">
	<br>
	<img width="352" alt="image" src="https://user-images.githubusercontent.com/103388556/200953293-64f7d6ed-c1ad-479b-8639-a828afd90ccc.png">
	
3. If you successfully launched the app, a new window with the front-end should be created and you should see the login page.

	<img width="1433" alt="image" src="https://user-images.githubusercontent.com/103388556/200953968-578c800d-47a6-441e-ada4-f3039c53dac2.png">

4. The user should be able to log in with any credentials and have the cocktail list rendered for them upon login.

	<img width="1432" alt="image" src="https://user-images.githubusercontent.com/103388556/200959663-08e6f422-2c0d-4839-a00d-654d407e3b28.png">
	
5. The user can add their own favorite cocktails to the list from the Add A Cocktail tab. Once the user submits, their newly created cocktail will be added to the JSON server and should appear on the Home page in the cocktail list.

	<img width="1431" alt="image" src="https://user-images.githubusercontent.com/103388556/200959254-7e8c33e0-5eb5-4f8b-9684-ec2b979fe447.png">

6. The user can view the details of how to make a particular cocktail by clicking on the "Details" button on any of the cards.

	<img width="1425" alt="image" src="https://user-images.githubusercontent.com/103388556/200960148-f96a5a4b-da8a-47b8-9de4-0c460862b87e.png">

7. The user can delete cocktails from the JSON server and front-end by either clicking the "Delete Cocktail" button in cocktail's details or by clicking the "Delete" button on a card in the cocktails list.

	<img width="537" alt="image" src="https://user-images.githubusercontent.com/103388556/200960489-66e1b5c8-24b2-4202-a96e-2b6d4a62a130.png">
	
	<img width="182" alt="image" src="https://user-images.githubusercontent.com/103388556/200960548-4c8babde-5783-4da0-94bc-325c6683f965.png">
	
8. The "Log Out" button at the top right of the screen will send the user back to the Login page.

	<img width="485" alt="image" src="https://user-images.githubusercontent.com/103388556/200960733-89b8a5f0-06eb-4fe3-bcd9-8c3e2fae038c.png">

## Contributing

Contributions are welcome, but please open an issue first to discuss what you would like to change. If you fork the repository, please rememeber that this code is not meant to be monetizable or for commercial use.

## License/API

All of the data was pulled from the [TheCocktailDB API](https://www.thecocktaildb.com/api.php?ref=apilist.fun)
