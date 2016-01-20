// var data = [];
// var dataSet = 30;

// var width = 600;
// var height = 500;

// for(var i = 0; i< dataSet; i++){
// 		var scoreType = "apples";
// 		if(i>9&&i<=19) scoreType = "oranges";
// 		if(i>19)scoreType = "bananas"
// 		data.push({
// 			score: Math.floor(Math.random()*100),
// 			tries: Math.floor(Math.random()*10),
// 			scoreType: scoreType		})
// }

// console.log(data)


// var svg = d3.select('#container')
// 			.append('svg')
// 			.attr({
// 				height:height,
// 				width: width
// 			})
// console.log(svg)
// 	var xScale = d3.scale.linear()
// 					.domain(d3.extent(data, function(d){
// 						console.log(d.tries)
// 						return d.tries}))
// 					.range([0,width])

// 	var yScale = d3.scale.linear()
// 					.domain(d3.extent(data, function(d){return d.score}))
// 					.range([height,0])


// svg.append('g')
// 	.selectAll('.rect')
// 		.data(data)
// 		.enter()
// 		.append('rect')
// 		.attr({
// 			height: function(d){return yScale(d.score)},
// 			width: 20,
// 			x: function(d,i){
// 				return xScale(d.tries*i/10)},
// 			y:function(d){return (height-yScale(d.score))}
// 		})
// 		.classed( 'hover-rect', true)

// svg.append('g')
// 	.selectAll('.rect')
// 		.data(data)
// 		.enter()
// 		.append('rect')
// 		.attr({
// 			height: 10,
// 			width: 20,
// 			x: function(d,i){
// 				return xScale(d.tries*i/10)},
// 			y:function(d){return (height-yScale(d.score))}

// 		})
// 		.style('fill','blue')


window.d3.csv('data.csv', function(data){
	d3.csv('data2.csv', function(data2){


			//combine data
			var combinedData = data.map(function(obj){
				data2.forEach(function(obj2){
					if(obj.campaign === obj2.campaign){
						obj.media_type = obj2.object_type;
					}
				})
				return obj
			})

			// filter out any non x/y action
			var combinedData = combinedData.map(function(obj){
				obj.actions = JSON.parse(obj.actions)
				obj.actions = obj.actions.filter(function(action){
					if(action.y) return true;
					if(action.x) return true;
				})
				return obj
			})

			// #1: filter for Date data
			var totalFebCampaigns = 0;
			var febCampaigns = [];
			var febData = combinedData.filter(function(obj){
				var check = obj.date.split("-")
				return check[1] == '02'
			})
			febData = removeDuplicated(stripObject(febData))
 
			// #2: Total Conversions for plants
			var totalConversionsForPlants = 0;
			var plantCheck = new RegExp('(plants\\w+)')
			combinedData.forEach(function(obj){
				if(plantCheck.test(obj.campaign)) {
					obj.actions.forEach(function(conversions){
						if(conversions.action =='conversions'){
						if(conversions.y) totalConversionsForPlants = totalConversionsForPlants + conversions.y;
						else totalConversionsForPlants =	totalConversionsForPlants + conversions.x;}
					})
				}
			})

			// #3: create audience_asset data
			var uniqueAudienceAsset = [];
			var audienceAssetData = new Array();
			combinedData.forEach(function(obj){
				var temp = obj.campaign.split("_")
				uniqueAudienceAsset.push(temp[1].concat(("_"+temp[2])))
				audienceAssetData.push(obj)
			})

			// #4: Total cost per view
 			var totalCostPerVideo= 0;
 			var totalViews = 0;
			combinedData.forEach(function(obj){
				if(obj.media_type === 'video'){
					totalCostPerVideo = totalCostPerVideo + Number(obj.spend);
					obj.actions.forEach(function(views){
						if(views.y) totalViews = totalViews + views.y;
						else totalViews =	totalViews + views.x;
					})
				}
			})
			
			uniqueAudienceAsset = uniqueAudienceAsset.sort()
			uniqueAudienceAsset = removeDuplicated(uniqueAudienceAsset);
			var getTotals = uniqueAudienceAsset.map(createAggregateObj)
			getTotals = getConversions(getTotals, audienceAssetData)
			getTotals.sort(function(a,b){return a.total - b.total})



			console.log("Question 1: The total number of unique campaigns in February was " + (febData.length-1))
			console.log('Question 2: The total conversions from plants are ' +  totalConversionsForPlants)
			console.log("Question 3: The asset and audience combination that had the least expensive conversions was " + getTotals[0].audience_asset)
			console.log('Question 4: the total aggregated cost per video view is ' + Math.floor((totalCostPerVideo/totalViews)*100)/100)
			
	})
})






function removeDuplicated(data){
				var out = [];
			var len = data.length - 1;
			if (len >= 0) {
			    for (var i = 0;i < len; i++) {
			        if (data[i]!== data[i+1]) {
			            out.push (data[i]);
			        }
			    }
			    out.push (data[len]);
			}
			return out
}


function createAggregateObj(obj){
				return {
					audience_asset: obj,
					conversions: 0,
					totalSpent: 0,
					conversionPrice: function(){return Math.floor(this.conversions/this.totalSpent*100)/100}
				}
			}

function getConversions(aggregator, data){
aggregator.forEach(function(getter){
		data.forEach(function(dataObj){
		if(dataObj.campaign == getter.audience_asset){
			getter.totalSpent = Math.floor(Number(dataObj.spend)) + getter.totalSpent;
			dataObj.actions.forEach(function(conversions){
				if(conversions.action =='conversions'){
				if(conversions.y) getter.conversions = getter.conversions + conversions.y;
				else getter.conversions = getter.conversions + conversions.x;}
			})
		}
	})
	getter.total = getter.conversionPrice()
})
		return aggregator
}

function stripObject(data){
	return data.map(function(obj){
		return obj.campaign
	})
}








