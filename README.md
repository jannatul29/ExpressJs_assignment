#ExpressJS Assignment

## Using tools and lenguage:
1. Html5
2. CSS
3. Bootstrap
4. Javascript
5. NodeJS
6. ExpressJS

# It shows weather changing in whole days in different time spam
![1st](https://user-images.githubusercontent.com/69507020/147814479-cf018ea3-cdfc-445f-bb61-fff06729cb87.png)

### After clicking toggle button weather change in Celsius to Fahrenheit
![2nd](https://user-images.githubusercontent.com/69507020/147814480-f702a1ca-5f6c-4a26-8235-1c4e30240d33.png)

### if anyone hit URL more than one between 1 to 10 seconds, display 403 HTTP Forbidden server responses
![3rd](https://user-images.githubusercontent.com/69507020/147804544-7aee7368-f083-4fc7-992a-0d24574879a0.png)

### Responsive Web-Application
![4th](https://user-images.githubusercontent.com/69507020/147814485-d22bd050-9e6c-45a0-8761-f0a37746d51e.png)

## Existing error
If anyone search incorrect location. It gives the weather changing beacuse Api's response was not null for incorrect location. 

## Solving error
1. If node JS version is less than 14, "express-rate-limit" library is not working and, if this(npm audit fix --force) command was not executed after installing this libray, this libray also gives error.
2. If pug's file indentention was not correct, then gives error. But we know that, if html file give not error for indentention.
