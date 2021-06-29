'use strict';
const uuid = require('uuid').v4;

class Clothes {
  constructor() {
    // initializing in memory db
    this.clothesDb = [];
    // [{id,data:{name,role}}]
  }


  read(id) {
    if (id) {
      return this.clothesDb.find((record) => record.id === id);
    } else {
      return this.clothesDb;
    }
  }

  /**
      *
      * @param {*} obj = {type:string,semester:string}
      */
  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };

    this.clothesDb.push(record);
    return record;
  }



  update(id, obj) {
    for (let i = 0; i < this.clothesDb.length; i++) {
      if (this.clothesDb[i].id === id) {
        this.clothesDb[i].data = obj;
        return this.clothesDb[i];
      }
    }
  }

  delete(id) {
    this.clothesDb = this.clothesDb.filter((record) => record.id !== id);
    return { error: 'the item deleted' }
  }
}
module.exports = Clothes;