
// เก็บข้อมูล login ลง session storage
export const authenticate = (res, next) => {
    if (window !== undefined) {
        sessionStorage.setItem('token', JSON.stringify(res.data.token));
        sessionStorage.setItem('email', JSON.stringify(res.data.email));
    }
    next();
}

// ดึงข้อมูล tokens
export const getToken = () => {
    if (window !== undefined) {
        if (sessionStorage.getItem('token')) {
            return JSON.parse(sessionStorage.getItem('token'));
        } else {
            return null;
        }
    }
}

// ดึงข้อมูล user
export const getUser = () => {
    if (window !== undefined) {
        if (sessionStorage.getItem('email')) {
            return JSON.parse(sessionStorage.getItem('email'));
        } else {
            return null;
        }
    }
}

// remove tokens
export const removeToken = (next) => {
    if (window !== undefined) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('email');
    }
    next();
}