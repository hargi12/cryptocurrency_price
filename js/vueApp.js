// the url to fetch data from
const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR';
const vm = new Vue({
	el: '#app',
	// mock up data for now
	/*data: {
	  results:{"BTC": {"USD": 3759.91, "EUR":3166.21},
	  			"ETH": {"USD": 281.7, "EUR": 236.25},
	  			"KES": {"USD": 9786.45, "EUR": 11234.87}}
	} */
	// Api data
	data: {
		results: []
	},
	// get data when mounting the application and notify the app
	mounted() {
    // add refresh method after every 10 secs
    this.upDate();
    this.timer = setInterval(this.upDate, 10000)
    },

    methods: {
    	upDate: function(){
    	 axios.get(url).then(response => {
			this.results = response.data;
		})
    },

    cancelAutoUpdate: function() { clearInterval(this.timer)},

    beforeDestroy(){
    	clearInterval(this.timer)
    }
   }	
});
