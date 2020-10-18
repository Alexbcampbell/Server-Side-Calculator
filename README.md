# Project Name

Server Side Calculator

## Description

With this project, my goal was to create a working calculator that took in two numbers and solve an equation with whichever operator was selected. Once the equation was run, it will show the answer and history of past equations on my page.

I first constructed inputs and buttons on my HTML page. After that I wanted to get my server and client side applications set up. I used POST and GET ajax requests to start a handshake between server and client. All input and click functions were created in client.js, once that info is submitted on the client side, it is sent to the server to be stored via POST. On the server is where the calculate function lives, I constructed it as an IF/ELSE IF conditional statement. It takes in which operator button was clicked and runs the correct math to be sent back to be displayed on the client side. I then push the information into an array for my history. That history is displayed underneath my calculator on the client side.

## Usage

1. Add whatever numbers you would like into the two different input fields.
2. Click whichever operator button you would like the calculator to run.
3. When the equation is run, it will show the answer below the input fields.
4. Below that will show the history of past calculations.

#### Built With

HTML5, CSS, JavaScript, jQuery, Node and Express.

##### License

MIT License

Copyright (c) [2020] [Alex Campbell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

###### Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. I would also like to thank Trevor Sansalone and Lara Komosa for coming together to help one another out. We all shared what we had and helped each other solve problems.
