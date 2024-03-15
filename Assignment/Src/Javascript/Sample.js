
function updateCheckboxSize() {
    const checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');
    const labels = document.querySelectorAll('.custom-checkbox label');
    let width;
    let height;  
    if (window.innerWidth>=1080){ // typical screen width
        width = (window.innerWidth / 4.3); 
        height = (window.innerWidth / 4.3);
    }
    else if (window.innerWidth>=760){ // typical tablet width
        width = (window.innerWidth / 2.1); 
        height = (window.innerWidth / 2.1);
    }
    else if(window.innerWidth<760){ // phone width 
 
       width = (window.innerWidth-10);
       height = (window.innerWidth-10);
    }
  
    checkboxes.forEach((checkbox) => {
      checkbox.style.width = width + 'px';
      checkbox.style.height = height + 'px';
    
    });
    
    labels.forEach((label) => {
      label.style.width = width + 'px';
      label.style.height = height + 'px';
    
    });
  }
  

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateCheckboxSize, 10);
  });
  
  document.addEventListener('DOMContentLoaded', updateCheckboxSize);
  