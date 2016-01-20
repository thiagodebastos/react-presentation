import axios from 'axios';

export function getUsers() {
    return axios.get('/:3000/users');
}
