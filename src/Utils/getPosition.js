export default function setElementPosition(element) {
    // Get the current position of the element
    const rect = element.getBoundingClientRect();
    
    // Set the `top` and `left` based on the element's current position
    element.style.position = 'absolute'; // Ensure the element is positioned absolutely
    element.style.top = `${rect.top}px`;
    element.style.left = `${rect.left}px`;
  }
  
  // Usage example: Setting position of a specific element
  document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('my-element'); // Replace with your element's ID or selector
    
    // Set the position based on current location
    setElementPosition(element);
  });