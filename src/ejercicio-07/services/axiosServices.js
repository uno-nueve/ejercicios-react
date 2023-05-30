import Instance from '../config/axios.config';

export function getRandomJoke() {
    return Instance.get('/', {
        validateStatus: (status) => {
            return status < 500;
        }
    });
}