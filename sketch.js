document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("grid-container");
    const button = document.getElementById("reset-button");
  
    function createGrid(size) {
      container.innerHTML = ""; // Clear existing grid
      const gridSize = size * size;
      const itemSize = 500 / size;
  
      for (let i = 0; i < gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;
        gridItem.addEventListener("mouseover", () => {
          gridItem.style.backgroundColor = "black";
        });
        container.appendChild(gridItem);
      }
    }
  
    function resetGrid() {
      let newSize = parseInt(prompt("Enter new grid size (for example 16 for 16x16):"));
      if (newSize && newSize > 0) {
        createGrid(newSize);
      } else {
        alert("Invalid size. Please enter a positive number.");
      }
      
      while (newSize > 200) {
        alert("enter below 200");
        newSize = parseInt(prompt("Enter new grid size (for example 16 for 16x16):"));
        createGrid(newSize);
      }
    }
  
    button.addEventListener("click", resetGrid);
  
    createGrid(16);
  });
  