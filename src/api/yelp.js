import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer 04npeZqccpfYCju8Jlvp-txCekGhigukX6FhSgQVIoiRqvEU_s58pDMgjnDkhIcxZZxBTNAzdmeREs-L6hozQxlPbiycDbTQ-O9b8pjNWPlizf2mkeqhFBM58cknYHYx',
    },
});
