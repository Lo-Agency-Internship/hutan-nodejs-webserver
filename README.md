# Nodejs (Simple Web Server Project)

This Project  Was Written With NodeJS And Give Us A Simple Webserver And Designed in Such a Way that You Can Use It For Your Own Projects.

## Installation
If You Using Linux Follwing Commands in Your Terminal,If You Using Windows Following Commands  With GitBash Terminal.
First Clone Project:
```bash
git clone git@github.com:Lo-Agency-Internship/hutan-nodejs-webserver.git
```

## Usage
Run This Command to Enter Directory:
```bash
cd hutan-nodejs-webserver/
```
Just Run This Bash Script:
```bash
./make.sh
```
And Enter Your Name:
```bash
What is Your Name:
```
## NOTE
1. If You Need Permition to Run This Script,Switch To **root** User And Follow Like This:
```bash
chmod +x make.sh
```
And Execute Script Again

2. If Your npm version is 8.5.5 Or Higher and Your Javascript Name is (( **server.js** )) In This Case npm Append Following Line Automatically:
```json 
"start": "node server.js"
 ```` 
 in package.json File.Otherwise You Must Uncomment Line 18 in **make.sh** and Overwrite Your Javascript Name.Like This:
```bash
sed -i '7i \ \   "start": "your-javascript-name.js " ,' package.json
```
 
## Result
In Order that See Result Enter **url** Into Your Browser:

```bash
http://localhost:4000/
```

## Use to Your Own Projects
You Can Copy **server.js** and **make.sh** Files Into Your Own Directory Projects And Enjoy it.



