# Instructions

1. Clone following repository [GitHub repository](https://github.com/3KniGHtcZ/RI_mybooks)
2. Edit bootstraped project to match following criteria

## Evaluation criteria

### Application Setup

1. **Is the application easy to install and start?**
   - The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.
2. **Does the application include README with clear installation and launch instructions?**
   - An updated README that describes the project and has instructions for installing and launching the project is included.

### Main Page

1. **Does the main page show three categories (or “bookshelves”) for books (currently reading, want to read, and read)?**
   - The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and author(s).
2. **Does the main page allow users to move books between shelves?**
   - The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
3. **Does information persist between page refreshes?**
   - When the browser is refreshed, the same information is displayed on the page.

### Search Page

1. **Does the search page have a search input that lets users search for books?**
   1. The search page has a search input field.
   2. The search page behaves correctly:
      - As the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s). You can use throttle/debounce but are not required to do so.
      - Search results are not shown when all of the text is deleted out of the search input box.
      - Invalid queries are handled and prior search results are not shown.
      - The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
      - The user is able to search for multiple words, such as “artificial intelligence.”
2. **Do the search results allow a user to categorize a book as “currently reading”, “want to read”, or “read”?**
   - Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf. If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
3. **Do selections made on the search page show up on the main page?**
   - When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

### Routing

1. **Does the main page link to the search page?**
   - The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browserʼs address bar is /search.
2. **Does the search page link back to the main page?**
   - The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browserʼs address bar is /.

### Code Functionality

1. **Does the project code handle state management appropriately?**
   - Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly. Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
2. **Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using key for list items? Is the code formatted properly?**
   - The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.
