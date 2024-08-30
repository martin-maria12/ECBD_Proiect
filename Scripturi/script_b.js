// carte
// update isbn dupa titlu
db.carte.updateOne(
  { "titlu": "Crime si pedeapsa" },
  { $set: { "isbn": "9780143058199" } }
);

// delete carte dupa isbn
db.carte.deleteOne(
  { "isbn": "9781503280786" }
);


// membru
// update adresa membru dupa nume
db.membru.updateOne(
  { "nume_membru.nume": "Ion", "nume_membru.prenume": "Popescu" },
  { $set: { "adresa.strada": "Strada Izvoarelor" } }
);

// delete membrii cu varsta > 25 si < 40
db.membru.deleteMany(
  { "varsta": { $gt: 25, $lt: 40 } }
);


// bibliotecar
// update numar de telefon bibliotecar '6653364b7379112e05237245'
db.bibliotecar.updateOne(
  { "_id": ObjectId("6653364b7379112e05237245") },
  { $set: { "telefon": "0733333333" } }
);

//update bibliotecar, cei cu varsa > 40 sa se ocupe de fisele de inscriere a membrilor
db.bibliotecar.updateMany(
  { "varsta": { $gt: 40 } },
  { $push: { "responsabilitati": "creare fise membri" } }
);

// update pentru adaugarea unei responsabilitati noi a unui bibliotecar
db.bibliotecar.updateOne(
  { "_id": ObjectId("6653364b7379112e05237247") },
  { $push: { "responsabilitati": "imprumuturi" } }
);

// delete bibliotecar dupa email
db.bibliotecar.deleteOne(
  { "email": "mihai.popescu@gmail.com" }
);


// imprumuturi
// update pentru schimbarea bibliotecarului
db.imprumuturi.updateOne(
  { "_id": 8 },
  { $set: { "bibliotecar_id": ObjectId("6653364b7379112e05237245") } }
);

//delete imprumuturi pentru un anumit membru
db.imprumuturi.deleteMany(
  { "membru_id": ObjectId("665334ea7379112e0523723f") }
);
