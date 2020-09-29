var names = ["John", "Joe"];
for(var i=0; i < names. length; i++) {
	console. log("Hello" + names[i]);
}

names[100] = "Yaakov";
for(var i=0; i < names. length; i++) {
	console. log("Hello SomeName");
}