function Person(firstName, lastName) {
  const _firstName = firstName;
  const _lastName = lastName;

  this.getFirstName = () => _firstName;
  this.getLastName = () => _lastName;
}

const defaultOwner = new Person('마틴', '파울러');

export function getDefaultOwner() {
  return defaultOwner;
}
