## States in React Query

stale: The query data is invalid or old <br/>
fetching: New data is being fetched but the UI will still show the old data<br/>
fresh: This is the latest data <br/>

## Statuses in React query

status: Overall status of the react query. It stays equal to `success` even if new data is being fetched. 
        This is basically used initially when the hook is mounted for the first time and useQuery is running
        for the first time. It will be in the state of `loading`. <br/>
fetchStatus: It changes to `fetching` every time a data is being fetched.<br/>