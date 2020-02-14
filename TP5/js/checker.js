/****************************************
 * Checker functions
 ***************************************/

const Checker = {};

Checker.lastname = function() {
  const lastname = document.querySelector('#lastname');
  return lastname.value.length >= 2;
};
