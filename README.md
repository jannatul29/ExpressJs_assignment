#ExpressJS Assignment

## Using tools and lenguage:
1. Html5
2. CSS
3. Bootstrap
4. Javascript
5. NodeJS
6. ExpressJS

### It shows weather changing in whole days in different time spam
##### Screenshot No.: 01
![1st](https://user-images.githubusercontent.com/69507020/147814479-cf018ea3-cdfc-445f-bb61-fff06729cb87.png)

### After clicking toggle button weather change in Celsius to Fahrenheit
##### Screenshot No.: 02
![2nd](https://user-images.githubusercontent.com/69507020/147814480-f702a1ca-5f6c-4a26-8235-1c4e30240d33.png)

### if anyone hit URL more than one between 1 to 10 seconds, display 403 HTTP Forbidden server responses
##### Screenshot No.: 03
![3rd](https://user-images.githubusercontent.com/69507020/147804544-7aee7368-f083-4fc7-992a-0d24574879a0.png)

### Responsive Web-Application
##### Screenshot No.: 04
![4th](https://user-images.githubusercontent.com/69507020/147814485-d22bd050-9e6c-45a0-8761-f0a37746d51e.png)

## Solving error
1. If node JS version is less than 14, "express-rate-limit" library is not working and, if this(npm audit fix --force) command was not executed after installing this libray, it also gives error.
2. If pug's file indentation was not correct, then gives error. But we know that, if html file give not error for indentation.

## Existing error
If anyone search incorrect location, it gives incorrect location and search correct location, it gives correct output (shown in 5,6,7 no. screenshots). Somethimes it is not working (shown in screenshots 8). I use this logic:
if( object.location.name == req.params.city ){
      .
      .
      .
}else{
    res.send("Location is incorrect");
}

##### Screenshot No.: 05
![10](https://user-images.githubusercontent.com/69507020/147819169-e75b02fb-5fc4-4ec6-9589-35182ff86c32.png)

##### Screenshot No.: 06
![11](https://user-images.githubusercontent.com/69507020/147819178-f5b0a863-82e5-4458-8f85-f5fbc7905d47.png)

##### Screenshot No.: 07
![13](https://user-images.githubusercontent.com/69507020/147819181-2895c75e-bd68-426f-8254-9373310f89b4.png)

##### Screenshot No.: 08
![15](https://user-images.githubusercontent.com/69507020/147819186-def4ef9a-ab4a-4cec-9e3a-2f121e0adb23.png)

