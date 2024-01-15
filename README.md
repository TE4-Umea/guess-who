# guess-who

För att få prisma att fungera så tog jag bort en rad i package.json, vilket gör att någonting byter från typen "module" till "commonjs". Detta kan betyda att vi inte kan använda import/export utan istället require/module.exports. Detta är något som vi kan behöva ändra tillbaka senare.
```json
type: "module"
```
