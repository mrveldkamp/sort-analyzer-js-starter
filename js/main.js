// SORT ANALYZER START CODE BY MR. V

// Global Variables
let randomArray = [];
let reversedArray = [];
let nearlySortedArray = [];
let fewUniqueArray = [];

// The initializeDataArrays function is located in file-loader.js. It is used to initialize the Global Data Arrays declared above from the provided data files.
initializeDataArrays();

// HTML elements
let dataSetSelectEl = document.getElementById("data-select");
let algorithmSelectEl = document.getElementById("algorithm-select");
let runBtnEl = document.getElementById("run-btn");
let sortResultsEl = document.getElementById("sort-results");

// Event Listeners
runBtnEl.addEventListener("click", processSort);

// Event Functions
function processSort() {
  // To make sure we always start with the original data we should only run a sort algorithm on a copy of the original data.
  let dataSetCopy = getCopyOfSelectedData(dataSetSelectEl.value);
  console.log("dataSetCopy before sort:", dataSetCopy);

  // Sort dataSetCopy using selected sort alogirthm, time how long sort takes
  let startTime;
  let endTime;
  let selectedAlgorithm = algorithmSelectEl.value;
  if (selectedAlgorithm === "bubble") {
    // Time Bubble Sort
    startTime = performance.now();
    bubbleSort(dataSetCopy);
    endTime = performance.now();
  } else if (selectedAlgorithm === "selection") {
    // Time Selection Sort
    startTime = performance.now();
    selectionSort(dataSetCopy);
    endTime = performance.now();
  } else if (selectedAlgorithm === "insertion") {
    // Time Insertion Sort
    startTime = performance.now();
    insertionSort(dataSetCopy);
    endTime = performance.now();
  }

  // Output Results
  sortResultsEl.innerHTML = endTime - startTime;
  console.log("dataSetCopy after sort:", dataSetCopy);
}

// Helper Functions
function getCopyOfSelectedData(dataSetName) {
  // Use data set name from select element to decide which array to copy and return.
  if (dataSetName === "random") {
    return randomArray.slice();
  } else if (dataSetName === "reversed") {
    return reversedArray.slice();
  } else if (dataSetName === "nearly-sorted") {
    return nearlySortedArray.slice();
  } else if (dataSetName === "few-unique") {
    return fewUniqueArray.slice();
  }
}

