const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

// const democrat = presidents.filter(presidentD) => (presidentD.party === "D");

// console.log(democrat); couldve put console.log by replacing const democrat

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

// const republican = presidents.filter(
//   (presidentR1) => presidentR1.terms === 1 && presidentR1.party === "R"
// );
// console.log(republican);

//3) return only the last three presidents
// const last3 = presidents.slice(-3);
// console.log(last3);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
// const dem2 = presidents.filter(
//   (dem2) => dem2.terms === 2 && dem2.party === "D"
// );
// console.log(dem2);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
// if ([(presidents.name = "Lyndon Johnson" || presidents.terms === 2)]) {
//   alert("LBJ served two terms");
// } else alert("LBJ was one and done");

const lbj = presidents.filter((lbj) => lbj.name === "Lyndon Johnson");
if (lbj[0].terms === 2) {
  alert("LBJ served two terms");
} else {
  alert("LBJ was one and done");
}
console.log(lbj[0]);
