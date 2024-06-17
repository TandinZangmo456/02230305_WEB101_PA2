Pokedex Application 
This project shows the basic Pokedex application created with React; Zustand as the state manager, and API requests to retrieve Pokemon information. First, in the application it supports user to search for Pokemon, On different page the application also supports user to view detail of certain Pokemon and the list of Pokemon which the use caught. 
 
 Features 
 Search Functionality: Pokemons have names and users are allowed to search for them using the name. 
 Pagination: The application shows the Pokemon in form of a paginated list meaning that you can go the next page when the page is exhausted. 
 Pokemon Details: Information on the particular Pokemon which is chosen is presented which involves its types, abilities and statistics. 
 Caught Pokemon Management: Through this it is possible for the users to indicate that they have caught a specific Pokemon and therefore can filter it out from the list. 
 State Management: Zustand is used more for organization and to maintain global state such as the list of caught Pokemon. 
 Components 
 HomePage 
 The principal autority which forms the layout of the application. It includes: 
 
 A search bar specifically for the Pokemon series of games. 
 A button or a switch to switch from viewing all the Pokemon and the ones the player has caught. 
 Buttons for turning the pages of the list of Pokemon and moving through them. 
 Using conditional rendering to display all the Pokemon and if the user has only caught some to display only the caught ones. 
 
 
 PokemonCard 
 
 A component that holds the little details of a given Pokemon. It shows: 
 Pokemon’s name, the image of Pokemon, the types, abilities, stat values. 
 A “Catch” button adjacent to the pokemon to transfer it to the caught list. 
 A optional button that removes the Pokemon from the caught list only if the Pokemon is caught. 
 
 CaughtPokemonList 
 Shows the account caught Pokemon in a paginated manner. It includes: 
 Arrows to switch from one page to another. 
 Elements such as the current and total page numbers. 
 
PokemonDetails 
 Displays information about a Pokemon of choice obtained from the PokeAPI. It displays: 
 
 The Pokemon’s name, design, type/s, ability/s, and stats without delving into details [much]. 
 usePokemon 
 A hook that makes API request to PokeAPI to get data for a certain Pokemon and handling the state of the received data. 
 
 usePokemonStore 
 An open store to track the status of the caught Pokémon in a different part of the world. They give actions for capturing and releasing Pokemon from the list. 
 
 Usage 
 To execute the application, be certain you have Node. js installed and follow these steps:js installed and follow these steps:
