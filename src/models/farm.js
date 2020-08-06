const mongoose = require("mongoose");

const FarmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must supply a name"],
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "You must supply an owner"],
  },
  farmInfo: {
    location: String,
    numberOfBuildings: Number,
  },
  birdInfo: {
    number: Number,
    layers: Number,
    nonLayers: Number,
    sick: Number,
    healthy: Number,
    deathRate: String,
    productionRate: String,
  },
  days: [
    {
      date: Date,
      numberOfBirdsSold: Number,
      numberOfEggsSold: Number,
      deaths: Number,
      newlySickBirds: Number,
      newlyRecoveredBirds: Number,
      numberOfEggsProduced: Number,
      kgOfFeedConsumed: Number,
      litersOfWaterConsumed: Number,
      vaccination: String,
      currentMedication: String,
      feedingCosts: Number,
      medicalCosts: Number,
      waterCosts: Number,
      otherCosts: Number,
    },
  ],
  medics: {
    currentSymptoms: {
      weaknessInBirds: Boolean,
      wateryPoo: Boolean,
    },
    totalNumberOfBirdsShowingSymptoms: Number,
    recommendedMedication: String,
  },
  accounting: {
    sales: {
      birds: Number,
      eggs: Number,
    },
    profit: Number,
    loss: Number,
  },

  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

FarmSchema.pre("updateOne", { document: true, query: false }, function () {
  console.log("Updating");
});

const Farm = mongoose.model("Farm", FarmSchema);

// Farm.watch().
// on('change', data => console.log(new Date(), data));

module.exports = Farm;
