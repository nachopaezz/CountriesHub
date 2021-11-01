const { Router } = require("express");
const activityRoutes = require("./activity");
const countryRoutes = require("./country");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);  <----- Enrutado
router.use("/activity", activityRoutes);  // /api/activity/*
router.use("/country", countryRoutes);    // /api/country/*

module.exports = router;
