Connect to the Atlas cluster:


COPY
mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
Switch to this database:


COPY
use sample_airbnb
Find all documents that have Wifi as one of the amenities. Only include price and address in the resulting cursor.


COPY
db.listingsAndReviews.find({ "amenities": "Wifi" },
                           { "price": 1, "address": 1, "_id": 0 }).pretty()
Using the aggregation framework find all documents that have Wifi as one of the amenities``*. Only include* ``price and address in the resulting cursor.


COPY
db.listingsAndReviews.aggregate([
                                  { "$match": { "amenities": "Wifi" } },
                                  { "$project": { "price": 1,
                                                  "address": 1,
                                                  "_id": 0 }}]).pretty()
Find one document in the collection and only include the address field in the resulting cursor.


COPY
db.listingsAndReviews.findOne({ },{ "address": 1, "_id": 0 })
Project only the address field value for each document, then group all documents into one document per address.country value.


COPY
db.listingsAndReviews.aggregate([ { "$project": { "address": 1, "_id": 0 }},
                                  { "$group": { "_id": "$address.country" }}])
Project only the address field value for each document, then group all documents into one document per address.country value, and count one for each document in each group.


COPY
db.listingsAndReviews.aggregate([
                                  { "$project": { "address": 1, "_id": 0 }},
                                  { "$group": { "_id": "$address.country",
                                                "count": { "$sum": 1 } } }
                                ])
