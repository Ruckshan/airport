const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

// Home Page
// app.get("/", (req, res) => {
//   res.status(200).render("map");
// });
// Home Page
app.get("/", (req, res) => {
  res.status(200).Send("Airport API");
});

// Search Page
// app.post("/", async (req, res) => {
//   try {
//     const response = await fetch(
//       `https://webapp.aopa.org/AirportsAPI/airportsautocomplete/${req.body.query}`
//     );
//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// Airport Page
// app.get("/:name", async (req, res) => {
//   try {
//     const response = await fetch(
//       `https://webapp.aopa.org/AirportsAPI/airports/${req.params.name}`
//     );
//     const data = await response.json();

//     let {
//       icaoId,
//       name,
//       attended,
//       city,
//       stateProvince,
//       mainPhone,
//       website,
//       reviewSummary,
//       landingSurfaces,
//       elev,
//       towerPresent,
//       airspace,
//       location,
//       timeZone,
//       businessFuels,
//       thumbNail,
//       businesses,
//     } = data;
//     console.log(data.businessFuels);
//     const sortedData = {
//       icaoId,
//       name,
//       attended,
//       city,
//       stateProvince,
//       mainPhone,
//       website,
//       reviewSummary,
//       landingSurfaces,
//       elev,
//       towerPresent,
//       airspace,
//       location,
//       timeZone,
//       businessFuels,
//       thumbNail,
//       businesses,
//     };

//     res.status(200).render("airport", { data: sortedData });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });
// Search Page API
app.post("/api", async (req, res) => {
  try {
    const response = await fetch(
      `https://webapp.aopa.org/AirportsAPI/airportsautocomplete/${req.body.query}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Airport Page API
app.get("/api/:name", async (req, res) => {
  try {
    const response = await fetch(
      `https://webapp.aopa.org/AirportsAPI/airports/${req.params.name}`
    );
    const data = await response.json();

    let {
      icaoId,
      name,
      attended,
      city,
      stateProvince,
      mainPhone,
      website,
      reviewSummary,
      landingSurfaces,
      elev,
      towerPresent,
      airspace,
      location,
      timeZone,
      businessFuels,
      thumbNail,
      businesses,
    } = data;
    console.log(data.businessFuels);
    const sortedData = {
      icaoId,
      name,
      attended,
      city,
      stateProvince,
      mainPhone,
      website,
      reviewSummary,
      landingSurfaces,
      elev,
      towerPresent,
      airspace,
      location,
      timeZone,
      businessFuels,
      thumbNail,
      businesses,
    };

    res.status(200).json(sortedData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Started");
});
