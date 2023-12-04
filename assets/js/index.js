/**
 * contains client-side JavaScript function
 *  (primarily event handlers to fetch data from the Node server)
 */

const createEntryButton = document.querySelector("button.createEntry");
createEntryButton.addEventListener("click", () => {
  // redirect the client (browser) to the /createEntry path
  window.location = "/createEntry";
});
