'use strict';
const uuid = require('uuid').v4;

class Food {
  constructor() {
    // initializing in memory db
    this.foodDb = [];

  }

  read(id) {
    if (id) {
      return this.foodDb.find((record) => record.id === id);
    } else {
      return this.foodDb;
    }
  }


  /**
    *
    * @param {*} obj = {food:string,type : string}
    */
  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };

    this.foodDb.push(record);
    return record;
  }



  update(id, obj) {
    for (let i = 0; i < this.foodDb.length; i++) {
      if (this.foodDb[i].id === id) {
        this.foodDb[i].data = obj;
        return this.foodDb[i];
      }
    }
  }




  delete(id) {
    this.foodDb = this.foodDb.filter((record) => record.id !== id);
    return { error: 'the item deleted' };
  }
}


module.exports = Food;