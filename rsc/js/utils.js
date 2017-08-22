/**
 * Calcul l'age automatiquement à partir d'une date de naissance
 * @param birth_month : le mois de naissance
 * @param birth_day : le jour de naissance
 * @param birth_year : l'année de naissnace
 * @returns {number|*} l'age
 */
function calculerAge(birth_day,birth_month,birth_year) {
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - birth_year;

    if(today_month < (birth_month  -1)) {
        age--;
    }
    if(((birth_month - 1) == today_month) && (today_day < birth_day)) {
        age --;
    }
    return age;
}
