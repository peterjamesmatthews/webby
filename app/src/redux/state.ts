/*
This ts file defines the type structure of an abstract global Redux state.
Every entry into the state should be of the following form:
{
  ...,
  key: type  // - succinct, yet meaningful description of use, default value
}
For example, if I was to store an authentication token for server in state,
then that entry would look like...
{
  ...,
  auth_token: string  // authentication token for server, defaults to null
}
*/
export type State = {
  app: {
    now: Date  // tracks a Date object that's displayed by App
  }
}
