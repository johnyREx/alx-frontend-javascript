import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
	const promises = [signUpUser(fisrtName, lastName), uploadPhoto(fileName)];
	return Promise.allSettled(promises).then((res) => {
		const array = [];
		res.forEach((itemk) => {
			const dict = {};
			dict.status = item.status;
			dict.value = (item.status === 'fulfilled') ? item.value : dict.value = String(item.reason);
			array.push(dict);
		});
		return array;
	});
}
