# Mixology Buddy

This React app lets the user catalog their favorite cocktails. This code is not meant to be monetizable or for commercial use.

## Installation

1. To access the functionality of this app, you will need to fork and clone the back end repositiory from [here](https://github.com/tred237/json-server-template). (The instructions to get this working is located in the README)

2. After setting up the back-end, you need to fork this repository
   
![image](https://user-images.githubusercontent.com/103388556/189546584-8ec5fef7-4d7d-4c47-ae6b-f6e6ae834a69.png)
  
![image](https://user-images.githubusercontent.com/103388556/189546761-f0f05411-1967-46c7-b081-063bc6951ae0.png)

3. Copy the SSH key from the forked repository.

![image](https://user-images.githubusercontent.com/103388556/189546817-4d32dcbb-e79e-4220-8fc2-c573d21e9cc1.png)
  
4. In your terminal, clone the repository using the SSH key you copied from the fork.
```
git clone <pasted-ssh-key>
```
5. Navigate to the root of the cloned repository and install dependancies
```
cd mixology-buddy
npm install
```
	
## Usage

1. Start up the back-end of the app. Instructions on how to do this are located in the Usage sections, [here](https://github.com/tred237/json-server-template)
	
2. In another terminal window, navigate to the the root of your front-end repository and start the app. You will likely be asked if you want to run the app on a different port. If so, enter `y`.
```
cd mixology-buddy
npm start
```
<img width="452" alt="image" src="https://user-images.githubusercontent.com/103388556/200952535-9497418b-0074-45aa-815b-e180bf663bd7.png">

<img width="352" alt="image" src="https://user-images.githubusercontent.com/103388556/200953293-64f7d6ed-c1ad-479b-8639-a828afd90ccc.png">
	
3. If you successfully launched the app, a new window with the front-end should be created and you should see the app's home page.

<img width="1431" alt="image" src="https://user-images.githubusercontent.com/103388556/202944126-3b65d5df-9775-4c19-a89d-dd60326fa8d7.png">
	
4. The user can add their favorite cocktails to the list from the Add A Cocktail tab. Once the user submits, their newly created cocktail will be added to the JSON server and should appear on the Home page in the cocktail list.

<img width="1431" alt="image" src="https://user-images.githubusercontent.com/103388556/200959254-7e8c33e0-5eb5-4f8b-9684-ec2b979fe447.png">

<img width="1434" alt="image" src="https://user-images.githubusercontent.com/103388556/202944357-45e5f632-27d8-4f3e-a7ce-d5afacb7540b.png">

5. The user can view the details of how to make a particular cocktail by clicking on the "Details" button on any of the cards.

<img width="1428" alt="image" src="https://user-images.githubusercontent.com/103388556/202944437-7143114b-307f-4c15-9e5d-121278344e98.png">

6. The user can delete cocktails from the JSON server and front-end by either clicking the "Delete Cocktail" button in cocktail's details or by clicking the "Delete" button on a card in the cocktails list. If a user deletes the cocktail from the cocktail's details page, they will be routed back to the home page.

<img width="334" alt="image" src="https://user-images.githubusercontent.com/103388556/202944584-26ff98e2-bda7-4074-bc25-b6ecad89e8f0.png">
	
<img width="277" alt="image" src="https://user-images.githubusercontent.com/103388556/202944649-d1f93a10-afc5-4d98-a83a-d92e012f3087.png">
	
7. In each cocktail's details page, there is a Like button. If a cocktail receives more than 5 likes, that cocktail will be added to the Popular Cocktails page. If user deletes a cocktail and it is shown on Popular Cocktails page, it will be moved from both the Home and Popular Cocktails page.

<img width="392" alt="image" src="https://user-images.githubusercontent.com/103388556/202944991-025e9114-1450-42eb-a8c3-1756a76e8b21.png">

<img width="1430" alt="image" src="https://user-images.githubusercontent.com/103388556/202945013-e7b1304b-6a89-48d9-8821-fb17074ee162.png">

## Contributing

Contributions are welcome, but please open an issue first to discuss what you would like to change. If you fork the repository, please rememeber that this code is not meant to be monetizable or for commercial use.

## License/API

All of the data was pulled from the [TheCocktailDB API](https://www.thecocktaildb.com/api.php?ref=apilist.fun)
