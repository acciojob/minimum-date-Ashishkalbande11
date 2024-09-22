function minDate(dates) {
  //write you code here
	dates.sort((a, b) => {
    let arr1 = a.split("/").map(Number); // Convert to number for comparison
    let arr2 = b.split("/").map(Number); // Fixed the typo here

    // Compare year
    if (arr1[0] !== arr2[0]) {
      return arr1[0] - arr2[0];
    }
    // Compare month
    if (arr1[1] !== arr2[1]) {
      return arr1[1] - arr2[1];
    }
    // Compare day
    return arr1[2] - arr2[2];
  });
  
  // Return the minimum date (which will be the first after sorting)
  return dates[0];
	
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
