# React Moving Forward
--  --  --  --  --  
_This repo is an example of how to use React Hooks and Suspense together. It approaches examples of almost all hook APIs and also displays some other possible integration between them._


## Get started

1) `git clone <repo_url>`
2) `yarn`
3) `yarn start`





**Note:**
_yarn is required, since we are using package.json's resolution feature to override the scheduler's version, npm doesn't provide that._

**Note 2:**
_The app fetches news articles from google news api, I've kept my google api key in the repo to facilitate the usage, however, there is a limit of 1000 requests per day, if you run out jsut create a new account and change the api key below. 
[google news api](https://newsapi.org/account)_







### 1) What are React Hooks?

> Hooks are a new feature proposal that lets you use state and other React features without writing a class. They’re currently in React v16.7.0-alpha and being discussed in an open RFC.


* useState
* useEffect
* useContext
* useReducer
* useMemo
* useRef
* useImperativeMethods
* useMutationEffect
* useLayoutEffect

### 2) New patterns that will emerge with Hooks & Suspense?











### 3) Attention, as of 15 of November, 2018 HOOKs are still in alpha. 
- RFC
https://github.com/reactjs/rfcs/pull/68

- useCallback() invalidates too often in practice #14099
PR about it: https://github.com/facebook/react/issues/14099

- Provide more ways to bail out inside Hooks #14110
https://github.com/facebook/react/issues/14110

- Accessing hooks by using the second param of the function proposed by Leebyron
https://github.com/reactjs/rfcs/pull/68#issuecomment-433186942

- useContext updates all connected components independent if dependent value updated.


