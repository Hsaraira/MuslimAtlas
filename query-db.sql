SELECT 'Cities' as table_name, COUNT(*) as count FROM "City"
UNION ALL
SELECT 'Listings', COUNT(*) FROM "Listing"
UNION ALL
SELECT 'Users', COUNT(*) FROM "User"
UNION ALL
SELECT 'Tags', COUNT(*) FROM "Tag";

SELECT name, slug, country FROM "City" LIMIT 5;
SELECT name, category, status FROM "Listing" LIMIT 5;
