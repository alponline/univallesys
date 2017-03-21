module.exports = function(app) {

        var products = [{
            id: 1,
            name: 'Produto 1',
            code: '0111',
            price: '1,00',
            date: '19-03-2017'
          },
          {
              id: 2,
              name: 'Produto 2',
              code: '0222',
              price: '2,00',
              date: '20-03-2017'
            }];

    app.get('/univalle/produto-page', function(req, res) {
        var path = require('path');
        res.sendfile(path.resolve('./WEB-INF/views/produto/form_produto.html'));
    });

    app.get('/univalle/produtos', function(req, res) {
        var path = require('path');
        res.send(products);
    });

    app.get('/univalle/produto/:id', function(req, res) { //{id} get id
         var id = req.params.id;
         var arrFound = products.filter(function(item) {
           return item.id == id;
         });

        res.send(arrFound);

   });

   app.delete('/univalle/produto/:id', function(req, res) { //{id} delete id
      var id = req.params.id;
      res.end(JSON.stringify("HttpStatus.OK - PRODUTO: " + id + " DELETE"));
   });

   app.post('/univalle/produto', function(req, res) {
       res.end(JSON.stringify("HttpStatus.OK - ADD"));
   });

   app.put('/univalle/produto/:id', function(req, res) { //{id} update id
       var id = req.params.id;
       res.end(JSON.stringify("HttpStatus.OK - PRODUTO: " + id + " UPDATE"));
   });

};
