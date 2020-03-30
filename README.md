# Chlorine Calculator

This is meant to calculate the amount of free chlorine from liquid bleach (sodium hypochlorite) or chlorine pellets and tablets (calcium hypochlorite).

Equations
=========

* Calcium hypochlorite:
 * ppm / 1000 * 142.98 / (35.45 * 2) * 100 / concentration
 * ppm / 1000 to get into grams * 142.98 molar mass of Ca(ClO)2 / (35.45 * 2) molar mass of 2(Cl) * 100 / concentration in percent

* Sodium hypochlorite:
 * ppm / 1000 * 100 / concentration
 * ppm / 1000 mL to get into mL * 100 / concentration

Deploy for github pages
=======================
`ng build --prod --output-path docs --base-href /chlorine-calculator/`
