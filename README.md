Compulsory Challenges

This repository contains solutions to the Compulsory Challenges using JavaScript.
Each challenge is in its own file inside this project folder.

 Challenges
 Student Grade Generator (Toy Problem)

Description:
A program that prompts the user to input student marks (0–100).
It outputs the correct grade based on the following rules:

A → > 79

B → 60 to 79

C → 49 to 59

D → 40 to 49

E → less than 40

File: gradeGenerator.js

Example Usage:

node gradeGenerator.js


Sample Output:

A
C
Invalid marks. Please enter a number between 0 and 100.

Speed Detector (Toy Problem)

Description:
A program that takes as input the speed of a car.

If speed ≤ 70 → prints "Ok".

For every 5 km/s above the speed limit (70), the driver gets 1 demerit point.

If the driver gets more than 12 points → prints "License suspended".

File: speedDetector.js

Example Usage:

node speedDetector.js


Sample Output:

Ok
Points: 2
License suspended

 Project Structure
compulsory-challenges/
│── gradeGenerator.js
│── speedDetector.js
│── README.md

 How to Run

Clone this repository:

git clone <your-repo-link>
cd compulsory-challenges


Run any of the files using Node.js:

node gradeGenerator.js
node speedDetector.js
