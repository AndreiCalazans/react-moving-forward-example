# React Moving Forward
--  --  --  --  --  
_This repo is an example of how to use React Hooks and Suspense together. It approaches examples of almost all hook APIs and also displays some other possible integration between them. It also shows how we can leverage TypeScript with React._


## Get started

1) `git clone <repo_url>`
2) `yarn`
3) Override types - look down.
4) `yarn start`


**Override types:**

1) Create missing `createRoot` type in @types/react-dom
In `react-moving-forward-example/node_modules/@types/react-dom/index` after `createPortal`
add:
`export function createRoot(children: any): any;`

2) Uncomment Suspense's maxDuration in @types/react 
In `react-moving-forward-example/node_modules/@types/react/index` search for maxDuration inside the Suspense type and uncomment maxDuration



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

### 2) New patterns that will emerge with Hooks & Suspense.

**Request data inside Function Components**

[code](https://github.com/AndreiCalazans/react-moving-forward-example/blob/8634ff1ed7aad09f0868f597d6268b79515c368d/src/modules/suspense/Suspense.tsx#L32-L39)

```JavaScript
const useGoogleNewsData = () => {
  const [googleNews, setGoogleNews] = useState([]);
  useEffect(() => {
    fetchGoogleNews(setGoogleNews);
  }, []);


  return googleNews;
};

```


**Minimalistic State shared with Context:**
_Note that it's recommended to separate the Provider into two._

[code](https://github.com/AndreiCalazans/react-moving-forward-example/blob/8634ff1ed7aad09f0868f597d6268b79515c368d/src/modules/user/ProvideUser.tsx#L21-L29)

```JavaScript
export const UserContextProvider: React.SFC<{}> = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  const value = {
    state,
    dispatch,
  };


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
```

**Fetcher: A component that fetches and component resolution incorporated with Suspense.**

[code](https://github.com/AndreiCalazans/react-moving-forward-example/blob/8634ff1ed7aad09f0868f597d6268b79515c368d/src/modules/fetcher/FetcherExample.tsx#L10-L21)
```JavaScript
    <View>
      <Text type='body'>Fetcher example</Text>
      <Fetcher
        url={googleNewsUrl}
        mapData={(dt) => dt.articles}
        onRender={({ data }: any) => <NewsList news={data} />}
        onFallback={<p>Loading...</p>}
        onFailure={<p>Failure</p>}
        maxDuration={1000}
        saveData={(dt) => null}
      />
    </View>
```





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




