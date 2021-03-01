const { find } = require("../task_3");

/** Задача 2 - Функция findAndRemove
Требуется написать функцию findAndRemove, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Запрос для поиска
требуется:
в текущем состоянии телефонной книги найти и удалить все записи, которые удовлетворяют требованиям
	1) См. find из task_3
возвращает:
	Число удаленных записей
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} query Строка для поиска
@returns {number} Количество удаленных записей
 */

function removeElements(phoneBook, newPhoneBook){
	const count = phoneBook.length - newPhoneBook.length;
	phoneBook.length = 0;
	newPhoneBook.forEach((value, index) => phoneBook[index] = value);
	return count;
}

function findAndRemove(phoneBook, query) {
	if(query === '*')
		return removeElements(phoneBook, []);	
	else if(query)
		return removeElements(phoneBook, phoneBook.filter(({phone, email}) => {
			const req = query.replace(/[+()-]/g,''); 
			return !email.match(req) && !phone.match(req);
		}));
	return 0;
}

module.exports.findAndRemove = findAndRemove;
