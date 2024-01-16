# guess-who

~~För att få prisma att fungera så tog jag bort en rad i package.json, vilket gör att någonting byter från typen "module" till "commonjs". Detta kan betyda att vi inte kan använda import/export utan istället require/module.exports. Detta är något som vi kan behöva ändra tillbaka senare.~~
```json
"type": "module"
```
Nevermind module är tillbakasatt.

## Styleguide
* CamelCase för variabler och funktioner
* 4 mellanslags indentering
* Semicolon efter varje rad

## Installation
### Databas

Just nu kör vi lokala databaser tills jag får Kaj att fixa Venus eller att jag sätter upp en egen databas. För att få det att fungera lokalt så behöver du göra följande:
* Lägg in detta i .env filen
```
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/guess"
```
* Skapa databasen i lokal MySQL
```
// Logga in i MySQL
mysql -u DITTANVÄNDARNAMN -p
// Skapa databasen
CREATE DATABASE guess;
```
* Kör följande kommando i terminalen
```
node prisma/seeder.js
```
