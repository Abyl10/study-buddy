from typing import Optional
from pymongo import MongoClient
from fastapi import FastAPI, HTTPException
from db.UserParams import UserParams
from model.feature_extractor import extract_from_words, find_closest

app = FastAPI()


@app.post("/add")
async def read_root(user: UserParams):
    client = MongoClient('mongodb://root:password@mongo', 27017, maxPoolSize=50)
    collection = client['collections']
    if collection["users"] is None:
        collection["users"] = {}
    collection = collection["users"]
    r = collection.find_one({"id": user.id})
    if r is None:
        collection.insert_one({"id": user.id, "good": extract_from_words(user.good).numpy().tolist(),
                                "bad": extract_from_words(user.bad).numpy().tolist()})
    else :
        collection.update_one({'id': user.id}, {'$set': {"good": extract_from_words(user.good).numpy().tolist(),
                                "bad": extract_from_words(user.bad).numpy().tolist()}})
    print(collection.find_one({"id": user.id}))
    client.close()
    return {"Status": "ok"}


@app.get("/find/{user_id}/{k}")
def read_item(user_id: int, k:int):
    client = MongoClient('mongodb://root:password@mongo', 27017, maxPoolSize=50)
    collection = client['collections']
    collection = collection["users"]
    r = collection.find_one({"id": user_id})
    if r is None:
        raise HTTPException(status_code=404, detail="User not found")
    all = collection.find({'id': {'$ne': user_id}})
    print(all)
    good_matches = find_closest(r, all, k)
    return {"Matches": [x[0] for x in good_matches]}