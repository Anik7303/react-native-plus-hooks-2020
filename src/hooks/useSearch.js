import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

/**
 * @param {String} term search term
 * @param {String} location [optional] location of user
 *
 * Returns 'error' if error occured, an 'array' containing the search results,
 * a 'function' for searching
 *
 * @returns {String} error : null | error
 * @returns {Array} data : an array containing the search result
 * @returns {Function} search : a function to search
 */
export default function useSearch(location = 'paris') {
    // san jose
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const searchApi = async (searchTerm) => {
        try {
            const res = await yelp.get('/search', {
                params: { term: searchTerm, limit: 50, location },
            });
            setData(res.data.businesses);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    useEffect(() => {
        let timerId;
        if (timerId) {
            timerId = setTimeout(() => {
                setError(null);
            }, 5000);
        }
        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, [error]);

    return [error, data, searchApi];
}
