use sample_training
db.inspections.findOne();
db.inspections.insert({
      "_id" : ObjectId("56d61033a378eccde8a8354f"),
      "id" : "10021-2015-ENFO",
      "certificate_number" : 9278806,
      "business_name" : "ATLIXCO DELI GROCERY INC.",
      "date" : "Feb 20 2015",
      "result" : "No Violation Issued",
      "sector" : "Cigarette Retail Dealer - 127",
      "address" : {
              "city" : "RIDGEWOOD",
              "zip" : 11385,
              "street" : "MENAHAN ST",
              "number" : 1712
         }
  })

db.inspections.insert({
      "id" : "10021-2015-ENFO",
      "certificate_number" : 9278806,
      "business_name" : "ATLIXCO DELI GROCERY INC.",
      "date" : "Feb 20 2015",
      "result" : "No Violation Issued",
      "sector" : "Cigarette Retail Dealer - 127",
      "address" : {
              "city" : "RIDGEWOOD",
              "zip" : 11385,
              "street" : "MENAHAN ST",
              "number" : 1712
         }
  })

db.inspections.find({"id" : "10021-2015-ENFO", "certificate_number" : 9278806}).pretty()




db.inspections.insert([ { "test": 1 }, { "test": 2 }, { "test": 3 } ])
db.inspections.insert([{ "_id": 1, "test": 1 },{ "_id": 1, "test": 2 },
                       { "_id": 3, "test": 3 }])
db.inspections.find({ "_id": 1 })
db.inspections.insert([{ "_id": 1, "test": 1 },{ "_id": 1, "test": 2 },
                       { "_id": 3, "test": 3 }],{ "ordered": false })
db.inspection.insert([{ "_id": 1, "test": 1 },{ "_id": 3, "test": 3 }])



Find all documents in the zips collection where the zip field is equal to "12434".


COPY
db.zips.find({ "zip": "12534" }).pretty()
Find all documents in the zips collection where the city field is equal to "HUDSON".


COPY
db.zips.find({ "city": "HUDSON" }).pretty()
Find how many documents in the zips collection have the city field equal to "HUDSON".


COPY
db.zips.find({ "city": "HUDSON" }).count()
Update all documents in the zips collection where the city field is equal to "HUDSON" by adding 10 to the current value of the "pop" field.


COPY
db.zips.updateMany({ "city": "HUDSON" }, { "$inc": { "pop": 10 } })
Update a single document in the zips collection where the zip field is equal to "12534" by setting the value of the "pop" field to 17630.


COPY
db.zips.updateOne({ "zip": "12534" }, { "$set": { "pop": 17630 } })
Update a single document in the zips collection where the zip field is equal to "12534" by setting the value of the "population" field to 17630.


COPY
db.zips.updateOne({ "zip": "12534" }, { "$set": { "population": 17630 } })
Find all documents in the grades collection where the student_id field is 151 , and the class_id field is 339.


COPY
db.grades.find({ "student_id": 151, "class_id": 339 }).pretty()
Find all documents in the grades collection where the student_id field is 250 , and the class_id field is 339.


COPY
db.grades.find({ "student_id": 250, "class_id": 339 }).pretty()
Update one document in the grades collection where the student_id is ``250`` *, and the class_id field is 339 , by adding a document element to the "scores" array.


COPY
db.grades.updateOne({ "student_id": 250, "class_id": 339 },
                    { "$push": { "scores": { "type": "extra credit",
                                             "score": 100 }
                                }
                     })
                     
                     
                     
                     db.inspections.find({ "test": 1 }).pretty()
Look at all the docs that have test field equal to 3.


COPY
db.inspections.find({ "test": 3 }).pretty()
Delete all the documents that have test field equal to 1.


COPY
db.inspections.deleteMany({ "test": 1 })
Delete one document that has test field equal to 3.


COPY
db.inspections.deleteOne({ "test": 3 })
Inspect what is left of the inspection collection.


COPY
db.inspection.find().pretty()
View what collections are present in the sample_training collection.


COPY
show collections
Drop the inspection collection.


COPY
db.inspection.drop()
