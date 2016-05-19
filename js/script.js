" use strict ";

var contactList = {};

function PhoneBook(){
	
};

function listAllNames() {
	var listName = "";
	for(var name in contactList) {
		listName += name + "<br/>";
	}
	display.innerHTML = listName;
};

function listAllNumbers() {
	var listNums = "";
	for(var name in contactList) {
		listNums += contactList[name] + "<br/>";
	}
	display.innerHTML = listNums;
};

function listAll() {
	var listThem = "";
	for(var name in contactList) {
		listThem += name + ": " + contactList[name]+ "<br/>";
	}
	display.innerHTML = listThem;
}

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  contactList[name] = [number];
};

function showAddAdditional() {
	var name = prompt("Enter name");
	var number = prompt("Enter number to add");
	contactList[name].push(" " + number);
}

function showRemove() {
	var name = prompt("Enter name");
	var number = prompt("Enter number to remove");
	var toRemove = contactList[name].indexOf(number);
	contactList[name].splice(toRemove, toRemove+1);
};

function showRemoveRecord() {
	var remove = prompt("Enter name to remove");
	delete contactList[remove];
};

function showLookup() {
	var lookupByName = prompt("Enter name to lookup");
  	for(i in contactList) {
  		if(lookupByName == i) {
  			display.innerHTML = contactList[i];
  		}
  	}
};

function reverseLookup() {
	var lookupByNumber = prompt("Enter name to lookup");
  	for(i in contactList) {
  		if(lookupByNumber == contactList[i]) {
  			display.innerHTML = i;
  		}
  	}
};

var display = document.getElementById("display");
