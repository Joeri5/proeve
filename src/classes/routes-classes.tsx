// Define an interface for the page information
interface Page {
  path: string;
  title: string;
  component: string;
}

// Define an interface for the pages object
interface Pages {
  [key: string]: Page;
}

// Import the JSON file and type it accordingly
import pages from './pages.json';

// Define the routes object
const routes: { [key: string]: Page } = {};

// Cast the imported pages object to the Pages interface
const typedPages: Pages = pages;

// Loop through the pages object and populate the routes
Object.keys(typedPages).forEach((key) => {
  routes[key] = typedPages[key];
});

export default routes;
