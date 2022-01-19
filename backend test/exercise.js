/* Asume the following funcion exists  */

// stores data (value) by key
async function cache_store(key, value) { }

// retrieves data by key (if it exists)
async function cache_retrieve(key) { }

// fetches data from a slow data source
async function slow_function(input) { }
/*  Make a memoize function...
    1. Cache the result of slow_function using the caching function.
    2. Return the fastest: the cached result or the fresh result. This means if the cache retrieval
       completes first, then that result should be returned, and if the slow_function completes first,
       then that result shoul be returned. This will result in the fastest possible version of fast_function
    3. Since we are always calling slow_function, we should always update the cache in either scenario.
*/

// runs faster than slow_function by using cache functions

function memoize(slow_function) {

    const fast_function = (input) => {
        // The function that is completed first is gonna resolve this promise
        return new Promise((resolve, reject) => {
            // flag when the data is retrieved
            let isData = false
            cache_retrieve(input).then(resp => {
                // if cache_retrieve finish first but is empty doesn't resolve the promise
                if (resp && !isData) {
                    resolve(resp)
                    isData = true
                } 
            });
            slow_function(input).then(resp => {
                // is the promise was already resolve skip and continue with updating the cache
                if (!isData) {
                    resolve(resp)
                    isData = true
                }
                // cache_store is called always
                cache_store(input, resp)
    
            }).catch((err) => {
                reject('Something happen with the API', err)
            })
        })
    }
    
    return fast_function
}

// Fast function is a promise
const fast_function = memoize(slow_function);
fast_function(input).then().catch()
