export const signUp = async function (userData) {
    console.log(userData);
    try{
        const response = await fetch("http://localhost:5000/api/signup",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        if (!response.ok) {
            const errorBody = await response.text();
            // Throw an error if the response is not OK (status outside 200-299)
            throw new Error(`Signup failed with status: ${response.status}, ${errorBody}`);
        }

        return await response.json();
    }
    catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
}

export const logIn = async function (userData) {
    try{
        console.log("LOG IN FUNC")
        const response = await fetch("http://localhost:5000/api/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Signup failed with status: ${response.status}, ${errorBody}`);;
        }
        console.log("here in auth")
        const returner = await response.json();
        return returner;


    }
    catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}