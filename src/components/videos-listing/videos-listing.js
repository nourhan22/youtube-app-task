



export default {
    props:['item','relatedVideos'],
    data() {
        return ({
            // list:this.list 
            subscribeNo:null,
            list: null
        })
    },
    components: {
        
    },
    methods: {
    },
    computed:{
        no:function(){
            // let base_url='https://www.googleapis.com/youtube/v3/channels/';
            // let channelId=this.item.snippet.channelId;
            // console.log("channelId",channelId)
             
            //    fetch(base_url+'?part=snippet,contentDetails,statistics&id='+channelId+'&key=AIzaSyCC9GCpSlFnw1jFu8jmiW4KiaZ-828OK_k')
            //    .then(response => response.json()).then((data) =>{ this.list = data;console.log("data",this.list); this.subscribeNo= this.list.items[0].statistics.subscriberCount; }
            //    )
               
               console.log("channel",this.subscribeNo);
               return this.subscribeNo
        }
     
     
     },
     filters: {
        subscribefilter: function (value) {
          if (!value) return ''
          if(value >= 1000 && value < 1000000)
          {
              value = value/1000 +'K'
          }
          else if (value >= 1000000)
          {
              value = value/1000000 +'M'
          }
          return value
        }
      }
}