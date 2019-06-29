class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = tabElement.dataset.tab; 
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    //  <- Delete this comment block when you work on the if statement
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === "all"){
      // If `all` is true, select all cards regardless of their data attribute values
      this.textbooks = document.querySelectorAll('.textbook');
      
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.textbooks = document.querySelectorAll(`.textbook[data-tab="${this.tabData}"]`);
    }
    // <- Delete this comment block when you work on the if statement

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.textbooks = Array.from(this.textbooks).map((textbook) => {
      return new TabCard(textbook);
    });

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => {
      console.log('clicked')
      this.selectTab();
    });
  }

  selectTab(){

    // Select all elements with the .tab class on them

    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    // Select all of the elements with the .card class on them
    const textbooks = document.querySelectorAll('.textbook');

    // Iterate through the NodeList setting the display style each one to 'none'
    textbooks.forEach((textbook) => {
      textbook.style.display = 'none';
    });
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.textbooks.forEach(textbook => textbook.selectCard());
  }
}

class TabCard {
  constructor(textbookElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.textbookElement = textbookElement;
  }

  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.textbookElement.style.display = "block";
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab').forEach((tab) => {
  return new TabLink(tab);
  
});
