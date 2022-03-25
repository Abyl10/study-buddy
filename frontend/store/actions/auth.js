import { AsyncStorage } from 'react-native'


export const signup = (username, email, password) => {
    return async dispatch => {
        const response = await fetch('localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });
        const resData = await response.json();

        if (resData.error) {
            throw new Error(resData.error)
        }

        return resData.message;
    }
}


export const signin = (username, password) => {
    return async dispatch => {
        const response = await fetch('localhost:8000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const resData = await response.json();

        if(resData.error){
            throw new Error(resData.error);
        }

        AsyncStorage.setItem('username', username);
    }
}
