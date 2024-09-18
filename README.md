# CS 210 - Programming Languages (Clock App) - Enhancement for CS 499

## Introduction

This C++ application is a static clock which takes user input (through the numbers 1, 2, 3 and 4) to add an hour, second or time to its interface. It was completed as the final project in CS 210 - Programming Languages.

## Table of Contents

1. [Running the original application (C++)](#running-the-original-application-c)

2. [Running the enhanced application (with front-end)](#running-the-enhanced-application-with-front-end)

3. [Future Developments](#future-developments)

## Running the original application (C++)

- First, ensure that you have [Docker](https://www.docker.com/products/docker-desktop/) on your computer.

- Clone the repository to your computer using ```git clone https://github.com/functionfaiecho/enhancedclock.git```.

- Then, navigate to the ```originalclock``` folder in the directory.

-  Build the Docker image using ```docker build -t cpp-clock-app .```.

- Run the container: ```docker run --rm -it --name cs210 cpp-clock-app```. 

Once successful, the application will display a menu in terminal. Enjoy!

## Running the enhanced application (with front-end)

- First, ensure that you have [Docker](https://www.docker.com/products/docker-desktop/) on your computer.

- Clone the repository to your computer using ```git clone https://github.com/functionfaiecho/enhancedclock.git```.

-  Build the Docker image using ```docker build -t enhancedclock .```.

- Once successful, run ```docker run -p 3000:3000 enhancedclock```.

## Future Developments

**Live Clock** - A dynamically-updated clock based on the user's computer time.



