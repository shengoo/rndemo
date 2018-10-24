import apisauce from 'apisauce' // https://github.com/infinitered/apisauce


const create = (baseURL = 'https://api.github.com/') => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache'
        },
        timeout: 10000
    })
    const getUser = (lastUserId = 0) => api.get('users', {since: lastUserId})
    return {
        getUser
    }
}

// let's return back our create method as the default.
export default {
    create
}