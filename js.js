(function () {
    'use strict';

    angular.module('MyApp', [])
        .controller('toBuyController', ToBuyController)
        .controller('boughtController', BoughtController)
        .service('itemsService', ItemsService);

    ToBuyController.$inject = ['itemsService'];
    function ToBuyController(service) {
        var controller = this;
        controller.BuyItems = service.getToBuyItems();

        controller.addToBought = function (itemIndex) { 
            service.addBoughtItem(itemIndex);
        }
    };

    BoughtController.$inject = ['itemsService'];
    function BoughtController(service) {
        var controller = this;
        controller.boughtItems = service.getBoughtItems();
    };

    class Item {
        constructor(name, amount) {
            this.name = name;
            this.amount = amount;
        };
    };

    function ItemsService() {
        var service = this;

        var boughtItems = [];

        var BuyItems = [
            new Item('Мандарини', 250),
            new Item('Чіа', 100),
            new Item('Йогурт', 150),
            new Item('Яблука', 100),
            new Item('Печиво', 50),
            new Item('Морозиво', 30)
        ];

        service.addBoughtItem = function (shopItemId) {
            boughtItems.push(BuyItems[shopItemId]);
            BuyItems.splice(shopItemId, 1);
        };

        service.getToBuyItems = function () {
            return BuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    };


    

})();
