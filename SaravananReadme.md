#### Running from Command Line

1. Please install the npm dependencies: Just added couple of more dependencies enzyme , styled components etc.,
    ```
    npm install
    ```   
2. Please run below command to start the application:
    ```
    npm run start
    ```
4. To view application, Please hit this URL **http://127.0.0.1:8082/** to open it. 8080 port was using for other stuff. And, currently changed to 8082.
5. Please run below command to run the test:
    ```
    npm run test
    ```
   
#### Notes/Comments

1. React hooks used to fetch the data. And it is more re usable. Could think we can use Redux and saga as middleware for bit more structured way when application grows.
2. Styled components has been used for style it.
3. I have put two way of putting Generation data with rainbow color and without rainbow. Not used any third party library to show the data currently.
4. Webpack proxy has been used to proxy `https://api.carbonintensity.org.uk`
5. Added some test for Generation components using jest.