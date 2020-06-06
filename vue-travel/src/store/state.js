let defaultCity = '北京';
try {
  localStorage.city ? defaultCity = localStorage.city : defaultCity;
} catch (error) {
  
}

export default {
  city : defaultCity
}