import { useState, useEffect } from 'react';

import yelp from '../api/yelp';

/**
 * @param {String} id Business ID
 *
 * Returns an object containing the details of the business with provided id
 *
 * @returns {String} error if any
 * @returns {Object} business details
 */
export default function useRestaurentDetail(id) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    const res = await yelp.get(`/${id}`);
                    setData(res.data);
                } catch (err) {
                    setError(err.message);
                }
            })();
        }
    }, [id]);

    return [error, data];
}
