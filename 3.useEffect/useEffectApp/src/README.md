# How UI is rendered in real-life apps
* We have an initial render -> loader/placeholder
* Parallely browser make a request for the data
* Replace the initial loader/Placeholder with actual data

# React must provide feature to just call a function at different stages of an app

flag=false,data=[] //here we are loading the placeholder

1. render the UI -> Loading
2. Make a request to the server of app
3. get the data -> data state -> rerender the page