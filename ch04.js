This lesson used the following commands:

Connect to the Atlas cluster:


COPY
mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
Switch to this database:


COPY
use sample_training
Find all documents where the tripduration was less than or equal to 70 seconds and the usertype was not Subscriber:


COPY
db.trips.find({ "tripduration": { "$lte" : 70 },
                "usertype": { "$ne": "Subscriber" } }).pretty()
Find all documents where the tripduration was less than or equal to 70 seconds and the usertype was Customer using a redundant equality operator:


COPY
db.trips.find({ "tripduration": { "$lte" : 70 },
                "usertype": { "$eq": "Customer" }}).pretty()
Find all documents where the tripduration was less than or equal to 70 seconds and the usertype was Customer using the implicit equality operator:


COPY
db.trips.find({ "tripduration": { "$lte" : 70 },
                "usertype": "Customer" }).pretty()



Connect to the Atlas cluster:


COPY
mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
Switch to this database:


COPY
use sample_training
Find all documents where airplanes CR2 or A81 left or landed in the KZN airport:


COPY
db.routes.find({ "$and": [ { "$or" :[ { "dst_airport": "KZN" },
                                    { "src_airport": "KZN" }
                                  ] },
                          { "$or" :[ { "airplane": "CR2" },
                                     { "airplane": "A81" } ] }
                         ]}).pretty()
