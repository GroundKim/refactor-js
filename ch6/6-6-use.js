import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();
owner.firstName = '지상';
console.log(owner.getFirstName());
console.log(getDefaultOwner());
