
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5050;


app.use(express.static('public'));

// Setup EJS
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');





app

    .get('/trends/:trendTag', (req, res)=> {

    	var trendTag = req.params.trendTag ;

    	switch ( trendTag ) {

    		case 'alcap' :
    			var trendName = 'Al Capone';
    			var season = 'Autumn - Winter 2021';
    			break;

    		case 'drip' :
    			var trendName = 'Dripping Beauty';
    			var season = 'Spring - Summer 2021';
    			break;

    		case 'gentl' :
    			var trendName = 'Gentle Breeze';
    			var season = 'Spring - Summer 2021';
    			break;

    		case 'greendev' :
    			var trendName = 'Green Devotion';
    			var season = 'Autumn - Winter 2021';
    			break;

    		case 'lmntree' :
    			var trendName = 'Lemon Tree';
    			var season = 'Autumn - Winter 2020';
    			break;

    		case 'pastel' :
    			var trendName = 'Pastel Syrup';
    			var season = 'Spring - Summer 2021';
    			break;

    		case 'seren' :
    			var trendName = 'Serenity';
    			var season = 'Spring - Summer 2021';
    			break;

    		case 'strtmorph' :
    			var trendName = 'Street Morphing';
    			var season = 'Autumn - Winter 2021';
    			break;

    	};
    	
        res.render( 'index', { trendTag, trendName, season } );

    })


    .listen(PORT, ()=> {
        console.log('App listening on port ' + PORT);
    })