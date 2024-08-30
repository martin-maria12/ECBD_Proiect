// insert carte
db.carte.insertMany([
  {
    "_id": ObjectId(),
    "titlu": "1984",
    "autor": "George Orwell",
    "gen": ["Distopie", "Politica"],
    "an_publicare": 1949,
    "isbn": "9780451524935",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Engleza",
      "numar_pagini": 328,
      "descriere": "Un roman despre o lume totalitara distopica."
    }
  },
  {
    "_id": ObjectId(),
    "titlu": "To Kill a Mockingbird",
    "autor": "Harper Lee",
    "gen": ["Fictiune", "Clasica"],
    "an_publicare": 1960,
    "isbn": "9780061120084",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Engleza",
      "numar_pagini": 281,
      "descriere": "O poveste despre rasism si inocenta."
    }
  },
  {
    "_id": ObjectId(),
    "titlu": "Mandrie si prejudecata",
    "autor": "Jane Austen",
    "gen": ["Romantic", "Fictiune", "Clasica"],
    "an_publicare": 1813,
    "isbn": "9780141040349",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Engleza",
      "numar_pagini": 279,
      "descriere": "O poveste de dragoste si prejudecati."
    }
  },
  {
    "_id": ObjectId(),
    "titlu": "Harry Potter si piatra filosofala",
    "autor": "J.K. Rowling",
    "gen": ["Fictiune", "Aventura"],
    "an_publicare": 1997,
    "isbn": "9780747532743",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Engleza",
      "numar_pagini": 223,
      "descriere": "Prima carte din seria Harry Potter."
    }
  },
  {
    "_id": ObjectId(),
    "titlu": "Razboi si pace",
    "autor": "Lev Tolstoi",
    "gen": ["Fictiune", "Istorie"],
    "an_publicare": 1869,
    "isbn": "9780199232765",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Rusa",
      "numar_pagini": 1225,
      "descriere": "Un roman epic despre istoria Rusiei."
    }
  },
  {
    "_id": ObjectId(),
    "titlu": "Micul Print",
    "autor": "Antoine de Saint-Exupery",
    "gen": ["Fictiune", "Filosofie"],
    "an_publicare": 1943,
    "isbn": "9780156012195",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Franceza",
      "numar_pagini": 96,
      "descriere": "O poveste filosofica despre un print mic."
    }
  },
  {
    "_id": ObjectId(),
    "titlu": "Crime si pedeapsa",
    "autor": "Fyodor Dostoevsky",
    "gen": ["Fictiune", "Psihologie"],
    "an_publicare": 1866,
    "isbn": "9780143058144",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Rusa",
      "numar_pagini": 671,
      "descriere": "Un roman despre crima si constiinta."
    }
  },
  {
    "_id": ObjectId(),
    "titlu": "Moby-Dick",
    "autor": "Herman Melville",
    "gen": ["Aventura", "Fictiune", "Clasica"],
    "an_publicare": 1851,
    "isbn": "9781503280786",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Englez",
      "numar_pagini": 635,
      "descriere": "O poveste despre cautarea unei balene albe."
    }
  },
  {
    "_id": ObjectId(),
    "titlu": "Alice in Tara Minunilor",
    "autor": "Lewis Carroll",
    "gen": ["Fictiune", "Literatura pentru copii"],
    "an_publicare": 1865,
    "isbn": "9781503222687",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Engleza",
      "numar_pagini": 96,
      "descriere": "O fetita care calatoreste intr-o lume ciudata."
    }
  },
  {
    "_id": ObjectId(),
    "titlu": "Lord of the Rings: The Fellowship of the Ring",
    "autor": "J.R.R. Tolkien",
    "gen": ["Fictiune", "Aventura"],
    "an_publicare": 1954,
    "isbn": "9780261103573",
    "disponibil": true,
    "detalii_carte": {
      "limba": "Engleza",
      "numar_pagini": 423,
      "descriere": "Prima carte din seria Lord of the Rings."
    }
  }
]);

// insert membru
db.membru.insertMany([
  {
    "_id": ObjectId(),
    "nume_membru": {
      "nume": "Ion",
      "prenume": "Popescu"
    },
    "varsta": 30,
    "email": "ion.popescu@gmail.com",
    "telefon": "0723456789",
    "adresa": {
      "strada": "Strada Mare",
      "numar": 10,
      "oras": "Bucuresti"
    },
    "data_inscriere": new Date("2021-01-15"),
    "carti_imprumutate": []
  },
  {
    "_id": ObjectId(),
    "nume_membru": {
      "nume": "Maria",
      "prenume": "Ionescu"
    },
    "varsta": 25,
    "email": "maria.ionescu@gmail.com",
    "telefon": "0734567890",
    "adresa": {
      "strada": "Strada Principala",
      "numar": 5,
      "oras": "Constanta"
    },
    "data_inscriere": new Date("2022-03-12"),
    "carti_imprumutate": []
  },
  {
    "_id": ObjectId(),
    "nume_membru": {
      "nume": "George",
      "prenume": "Marin"
    },
    "varsta": 40,
    "email": "george.marin@gmail.com",
    "telefon": "0745678901",
    "adresa": {
      "strada": "Strada Libertatii",
      "numar": 15,
      "oras": "Cluj-Napoca"
    },
    "data_inscriere": new Date("2020-11-10"),
    "carti_imprumutate": []
  },
  {
    "_id": ObjectId(),
    "nume_membru": {
      "nume": "Ana",
      "prenume": "Dumitru"
    },
    "varsta": 21,
    "email": "ana.dumitru@gmail.com",
    "telefon": "0756789012",
    "adresa": {
      "strada": "Strada Florilor",
      "numar": 8,
      "oras": "Timisoara"
    },
    "data_inscriere": new Date("2019-05-20"),
    "carti_imprumutate": []
  },
  {
    "_id": ObjectId(),
    "nume_membru": {
      "nume": "Alex",
      "prenume": "Popa"
    },
    "varsta": 28,
    "email": "alex.popa@gmail.com",
    "telefon": "0767890123",
    "adresa": {
      "strada": "Strada Garii",
      "numar": 2,
      "oras": "Iasi"
    },
    "data_inscriere": new Date("2018-09-05"),
    "carti_imprumutate": []
  },
  {
    "_id": ObjectId(),
    "nume_membru": {
      "nume": "Cristina",
      "prenume": "Radu"
    },
    "varsta": 22,
    "email": "cristina.radu@gmail.com",
    "telefon": "0778901234",
    "adresa": {
      "strada": "Strada Universitatii",
      "numar": 1,
      "oras": "Brasov"
    },
    "data_inscriere": new Date("2023-02-15"),
    "carti_imprumutate": []
  }
]);

// insert bibliotecar
db.bibliotecar.insertMany([
  {
    "_id": ObjectId(),
    "nume_bibliotecar": {
      "nume": "Ana",
      "prenume": "Ionescu"
    },
    "varsta": 45,
    "email": "ana.ionescu@gmail.com",
    "telefon": "0723456789",
    "adresa": {
      "strada": "Strada Mica",
      "numar": 20,
      "oras": "Cluj-Napoca"
    },
    "data_angajare": new Date("2020-05-20"),
    "responsabilitati": ["imprumuturi", "returnari"]
  },
  {
    "_id": ObjectId(),
    "nume_bibliotecar": {
      "nume": "Mihai",
      "prenume": "Popescu"
    },
    "varsta": 38,
    "email": "mihai.popescu@gmail.com",
    "telefon": "0734567890",
    "adresa": {
      "strada": "Strada Larga",
      "numar": 10,
      "oras": "Bucuresti"
    },
    "data_angajare": new Date("2015-08-15"),
    "responsabilitati": ["imprumuturi", "gestionare"]
  },
  {
    "_id": ObjectId(),
    "nume_bibliotecar": {
      "nume": "Mirela",
      "prenume": "Georgescu"
    },
    "varsta": 50,
    "email": "mirela.georgescu@gmail.com",
    "telefon": "0721236789",
    "adresa": {
      "strada": "Strada Izvoarelor",
      "numar": 8,
      "oras": "Iasi"
    },
    "data_angajare": new Date("2005-05-20"),
    "responsabilitati": ["gestionare", "returnari"]
  }
]);

// insert imprumuturi
db.imprumuturi.insertMany([
  {
    "_id": 1,
    "membru_id": ObjectId('665334ea7379112e0523723f'),
    "bibliotecar_id": ObjectId('6653364b7379112e05237245'),
    "carti": [
      {
        "carte_id": ObjectId('6653338c7379112e05237235'),
        "data_imprumut": new Date("2023-04-01"),
        "data_returnare": new Date("2023-04-15")
      }, 
	  {
        "carte_id": ObjectId('6653338c7379112e05237236'),
        "data_imprumut": new Date("2024-03-10"),
        "data_returnare": new Date("2024-03-24")
      }
    ]
  },
  {
    "_id": 2,
    "membru_id": ObjectId('665334ea7379112e05237240'),
    "bibliotecar_id": ObjectId('6653364b7379112e05237246'),
    "carti": [
      {
        "carte_id": ObjectId('6653338c7379112e05237236'),
        "data_imprumut": new Date("2023-03-10"),
        "data_returnare": new Date("2023-03-24")
      },
	  {
        "carte_id": ObjectId('6653338c7379112e05237238'),
        "data_imprumut": new Date("2020-02-10"),
        "data_returnare": new Date("2020-02-24")
      }
    ]
  },
  {
    "_id": 3,
    "membru_id": ObjectId('665334ea7379112e05237241'),
    "bibliotecar_id": ObjectId('6653364b7379112e05237245'),
    "carti": [
      {
        "carte_id": ObjectId('6653338c7379112e05237237'),
        "data_imprumut": new Date("2020-06-05"),
        "data_returnare": new Date("2020-06-19")
      }
    ]
  },
  {
    "_id": 4,
    "membru_id": ObjectId('665334ea7379112e05237242'),
    "bibliotecar_id": ObjectId('6653364b7379112e05237246'),
    "carti": [
      {
        "carte_id": ObjectId('6653338c7379112e05237238'),
        "data_imprumut": new Date("2023-02-12"),
        "data_returnare": new Date("2023-02-26")
      }
    ]
  },
  {
    "_id": 5,
    "membru_id": ObjectId('665334ea7379112e05237243'),
    "bibliotecar_id": ObjectId('6653364b7379112e05237245'),
    "carti": [
      {
        "carte_id": ObjectId('6653338c7379112e05237239'),
        "data_imprumut": new Date("2024-05-10"),
        "data_returnare": new Date("2024-05-24")
      }
    ]
  },
  {
    "_id": 6,
    "membru_id": ObjectId('665334ea7379112e05237244'),
    "bibliotecar_id": ObjectId('6653364b7379112e05237246'),
    "carti": [
      {
        "carte_id": ObjectId('6653338c7379112e05237239'),
        "data_imprumut": new Date("2024-04-20"),
        "data_returnare": new Date("2024-05-04")
      }
    ]
  },
  {
    "_id": 7,
    "membru_id": ObjectId('665334ea7379112e0523723f'),
    "bibliotecar_id": ObjectId('6653364b7379112e05237245'),
    "carti": [
      {
        "carte_id": ObjectId('6653338c7379112e0523723d'),
        "data_imprumut": new Date("2024-05-26"),
        "data_returnare": new Date("2024-06-05")
      }
    ]
  },
  {
    "_id": 8,
    "membru_id": ObjectId('665334ea7379112e05237243'),
    "bibliotecar_id": ObjectId('6653364b7379112e05237247'),
    "carti": [
      {
        "carte_id": ObjectId('6653338c7379112e0523723e'),
        "data_imprumut": new Date("2022-03-13"),
        "data_returnare": new Date("2023-03-27")
      },
	  {
        "carte_id": ObjectId('6653338c7379112e05237238'),
        "data_imprumut": new Date("2024-05-22"),
        "data_returnare": new Date("2024-06-01")
      }	  
    ]
  }, 
]);
