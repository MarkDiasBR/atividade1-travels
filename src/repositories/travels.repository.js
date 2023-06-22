import db from "../database/database.js";

export async function dbGetTravels(page, name) {
  const result = await db.query(
    `select p."fullName", COUNT(p) as "viagens"  from passengers as p
    JOIN passenger_travels ON passenger_travels."passengerId" = p.id
    JOIN travels ON travels.id = passenger_travels."travelId"
    WHERE p."fullName" ilike '%' || $1 || '%'
    GROUP BY p."fullName" 
    ORDER BY "viagens" desc
	LIMIT 25
	OFFSET (25*($2-1));`
    , [name, page]
  );
  return result;
}