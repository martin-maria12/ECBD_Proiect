// carte
// update pentru cartile care nu sunt disponibile (data retur > data curenta)
var dataCurenta = new Date();

var impr = db.imprumuturi.find({
  "carti.data_returnare": { $gt: dataCurenta }
});

while (impr.hasNext()) {
  var i = impr.next();
  i.carti.forEach(function(cart) {
    if (cart.data_returnare > dataCurenta) {
      db.carte.updateOne(
        { "_id": ObjectId(cart.carte_id) },
        { $set: { "disponibil": false } }
      );
    }
  });
};


// membru
//update la membru, adaugare titlu cartilor imprumutate in vectorul de carti imprumutate
var impr = db.imprumuturi.find();

while (impr.hasNext()) {
  var imprumut = impr.next();
  var membruId = imprumut.membru_id;

  if (Array.isArray(imprumut.carti)) {
    for (var i = 0; i < imprumut.carti.length; i++) {
      var carteImprumutata = imprumut.carti[i];
      var carteId = carteImprumutata.carte_id;
      var c = db.carte.findOne({ "_id": ObjectId(carteId) });

      if (c) {
        db.membru.updateOne(
          { "_id": ObjectId(membruId) },
          { $addToSet: { "carti_imprumutate": { "carte_id": carteId, "titlu": c.titlu, "data_imprumut": carteImprumutata.data_imprumut, "data_returnare": carteImprumutata.data_returnare } } }
        );
      }
    }
  }
};


// bibliotecar
// stergere responsabilitate "returnari" pentru bibliotecarii care fac si returnari si gestionare
var bibl = db.bibliotecar.find({
  responsabilitati: { $all: ["returnari", "gestionare"] }
});

while (bibl.hasNext()) {
  var bibliotecar = bibl.next();
  db.bibliotecar.updateOne(
    { "_id": bibliotecar._id },
    { $pull: { responsabilitati: "returnari" } }
  );
};


// imprumuturi
// extragerea numarului de imprumuturi pentru fiecare membru
db.imprumuturi.aggregate([
  { $group: { _id: "$membru_id", numar_imprumuturi: { $sum: 1 } } },
  { $sort: { numar_imprumuturi: -1 } },
  { $lookup: {
      from: "membru",
      localField: "_id",
      foreignField: "_id",
      as: "membru_detalii"
    }
  },
  { $unwind: "$membru_detalii" },
  { $project: {
      _id: 0,
      membru: "$membru_detalii.nume_membru",
      numar_imprumuturi: 1
    }
  }
]);
