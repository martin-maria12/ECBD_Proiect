// carte
// find carti dupa gen si sortare dupa titlu
db.carte.find(
	{ "gen": "Fictiune" }, 
	{ "titlu": 1, "autor": 1, "gen": 1, _id: 0 }
).sort({ "titlu": 1 });

// find carti dupa disponibilitate si ordonare descrescatoare dupa anul publicarii
db.carte.find(
	{ "disponibil": true }, 
	{ "titlu": 1, "an_publicare": 1, "disponibil": 1, _id: 0 }
).sort({ "an_publicare": -1 });

// find carti care au fost publicate inainte de 1900 si ordonare dupa anul publicarii
db.carte.find(
	{ "an_publicare": { $lt: 1900 } }, 
	{ "titlu": 1, "an_publicare": 1, _id: 0 }
).sort({ "an_publicare": 1 });

// paginare: afisare primele 3 carti
db.carte.find({}, { "titlu": 1, _id: 0 }).limit(3);

// find carti care sunt publicate inainte de 1900 sau dupa 1950
db.carte.find(
  { $or: [
      { "an_publicare": { $lt: 1900 } },
      { "an_publicare": { $gt: 1950 } }
    ]
  },
  { "titlu": 1, "an_publicare": 1, _id: 0 }
);


// membru
// find membrii care au numar de telefon
db.membru.find(
	{ "telefon": { $exists: true } }, 
	{ "nume_membru": 1, "telefon": 1, _id: 0 }
);

// find membri cu varsta >= 20 si <= 30 si sortare dupa varsta
db.membru.find(
	{ "varsta": { $gte: 20, $lte: 30 } }, 
	{ "nume_membru": 1, "varsta": 1, _id: 0 }
).sort({ "varsta": 1 });

// find membri din Constanta cu varsta > 20
db.membru.find(
  { $and: [
      { "adresa.oras": "Constanta" },
      { "varsta": { $gt: 20 } }
    ]
  },
  { "nume_membru": 1, "varsta": 1, "adresa": 1, _id: 0 }
);

// find membru care au imprumutat cel putin o carte si au numar de telefon specificat
db.membru.find(
  { $and: [
      { "carti_imprumutate": { $exists: true, $ne: [] } },
      { "telefon": { $exists: true } }
    ]
  },
  { "nume_membru": 1, "telefon": 1, "carti_imprumutate": 1, _id: 0 }
);

// bibliotecar
// find bibliotecar dupa oras
db.bibliotecar.find(
  { "adresa.oras": "Cluj-Napoca" },
  { "nume_bibliotecar": 1, "email": 1, "adresa": 1, _id: 0 }
);

// find bibliotecar dupa responsabilitate
db.bibliotecar.find(
  { "responsabilitati": "imprumuturi" },
  { "nume_bibliotecar": 1, "responsabilitati": 1, _id: 0 }
);

// find bibliotecar fara email
db.bibliotecar.find(
	{ "email": { $exists: false } },
	{ "nume_bibliotecar": 1, "email": 1, _id: 0 }
);

// sortare dupa varsta
db.bibliotecar.find().sort({ "varsta": 1 });


// imprumuturi
// find imprumut dupa membru si sortare dupa data imprumut
db.imprumuturi.find(
	{ "membru_id": ObjectId("665334ea7379112e05237240") }, 
	{ "membru_id": 1, "bibliotecar_id": 1, "carti": 1, _id: 0 }
).sort({ "carti.data_imprumut": 1 });

// find imprumut dupa carte
db.imprumuturi.find(
	{ "carti.carte_id": ObjectId("6653338c7379112e05237236") }, 
	{ "membru_id": 1, "carti": 1, _id: 0 }
);

// find imprumuturi fara carti
db.imprumuturi.find(
	{ "carti": { $exists: true, $size: 0 } }, 
	{ "membru_id": 1, "carti": 1}
);

// paginare: afisare ultimele 2 imprumuturi
db.imprumuturi.find({}, 
	{ "carti": 1, "membru_id": 1}
	).sort({ "_id": -1 }).limit(2);
	
// find imprumuturi cu data de returnare >= decat cea specificata
db.imprumuturi.find(
  { "carti": { 
      $elemMatch: { 
        "data_returnare": { $gte: ISODate("2020-06-19T00:00:00.000Z") } 
      } 
    }
  },
  { "membru_id": 1, "bibliotecar_id": 1, "carti": 1, _id: 0 }
);
