import axios from "axios";

export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const addCart = (data) => ({
  type: ADD_CART,
  payload: {
    ID: Math.random().toString().substr(9, 4),
    cQty: 1,
    ...data,
  },
});

export const removeCart = (data) => ({
  type: REMOVE_CART,
  payload: data,
});

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: REMOVE_CART,
  payload: error,
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("http://localhost:3003/posts")
      .then((res) => {
        const users = res.data;
        // console.log('res',res);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

export const fetchUsersUpdate = (blank) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    fetch("http://localhost:3003/posts", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blank),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
        const users = resp.data;
        dispatch(fetchUsersSuccess(users));
        // alert('Error')
      });
    });
    // axios("http://localhost:3000/posts")
    // .then(res => {
    //      const users = res.data
    //     console.log('res',res);
    //     dispatch(fetchUsersSuccess(users))
    // })
    // .catch(error => {
    //     const errorMsg = error.message
    //     dispatch(fetchUsersFailure(errorMsg))
    // })
  };
};
