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

        this.#validateArticleId(articleId);
        this.#validateQuantity(quantity);
        this.#validatePrice(price);

        this.#ArticleId = articleId;
        this.#Name = name;
        this.#quantity = quantity;
        this.#price = price;
    }

    get articleId() {
        //TODO Implement this method
        this.#ArticleId;
        this.#validateArticleId(value);

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
        this.#quantity = value;
        this.#validateQuantity(value);

    }

    get price() {
        //TODO Implement this method
        return this.#price;
    }

    set price(value) {
        //TODO Implement this method
        return this.#price = value;
    }

    get total() {
        //TODO Implement this method
        return this.#quantity * this.#price;
    }
    //endregion public methods

    //region private methods
    set #articleId(value) {
        //TODO Implement this method
        return this.#articleId = value;

    }

    set #name(value) {
        //TODO Implement this method
        return this.#name = value;

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
    }
    //endregion private methods
}



