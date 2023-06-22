import db from "../database/database.js";

export async function dbGetTravels(page, name) {
  const result = await db.query(
    `select p."fullName", COUNT(p) as "viagens"  from passengers as p
    JOIN passenger_travels ON passenger_travels."passengerId" = p.id
    JOIN travels ON travels.id = passenger_travels."travelId"
    WHERE p."fullName" like '%Brooke%'
    GROUP BY p."fullName" 
    ORDER BY "viagens" desc
	LIMIT 100
	OFFSET 0;`
    // `SELECT p."fullName", COUNT(p) AS "viagens"
    // FROM passengers AS p
    // JOIN passenger_travels ON passenger_travels."passengerId" = p.id
    // JOIN travels ON travels.id = passenger_travels."travelId"
    // WHERE p."fullName" LIKE '%brooke%'
    // GROUP BY p."fullName"
    // ORDER BY "viagens" DESC
    // LIMIT 100
    // OFFSET (10);`
  );
  return result;
}