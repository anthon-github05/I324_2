"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    //TODO Missing private attributs
    #ArticleId;
    #Name;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        //TODO Implement this method
        this.#articleId = articleId;
        this.#name = articleId;
        this.quantity = quantity;
        this.price = price;
    }

    get articleId() {
        //TODO Implement this method
        return this.#ArticleId;

    }

    get name() {
        //TODO Implement this method
        return this.#Name;
    }

    get quantity() {
        //TODO Implement this method
        return this.#quantity;
    }

    set quantity(value) {
        //TODO Implement this method
        if (!this.#validateQuantity(value)){
            this.#quantity = value;
        }
    }

    get price() {
        //TODO Implement this method
        return this.#price;
    }

    set price(value) {
        //TODO Implement this method
        if (!this.#validatePrice(value)){
            this.#price = value;
        }
    }

    get total() {
        //TODO Implement this method
        return this.#quantity * this.#price;
    }
    //endregion public methods

    //region private methods
    set #articleId(value) {
        //TODO Implement this method
        if (!this.#validateArticleId(value)){
            this.#ArticleId = value;
        }
    }

    set #name(value) {
        //TODO Implement this method
        this.#Name = value;

    }

    #validateArticleId(articleId) {
        //TODO Implement this method
        if (!Number.isInteger(articleId) || articleId < 1) {
            throw new InvalidArticleIdException();
        }
    }

    #validateQuantity(quantity) {
        //TODO Implement this method
        if (!Number.isInteger(quantity) || quantity < 1) {
            throw new InvalidQuantityException();
        }
    }

    #validatePrice(price) {
        //TODO Implement this method
        if (price < 10) {
            throw new InvalidPriceException();
        }
    }
    //endregion private methods
}



