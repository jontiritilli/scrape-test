const scrapeIt = require('scrape-it');

module.exports = function(app){
    app.get('/scrapeMenu', (req, res)=>{
            const response = scrapeIt("http://thematador.com/menu/dinner", {
                sections: {
                    listItem: "section",
                    data: {
                        sections: "h2",
                        items: {
                            listItem: "li.menu-item",
                            name: "items",
                            data: {
                                title: ".leader-title",
                                price: '.price'
                            }
                        }
                    }
                }
            }).then(
                response => {
                    res.send(response.data)
                }
            ).catch(
                err => {
                    res.send(err)
                }

            )
    });
}